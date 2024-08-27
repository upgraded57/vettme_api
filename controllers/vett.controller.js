const jwt = require("jsonwebtoken");
const axiosInstance = require("./../utils/axiosConfig");
const endpoints = require("./../utils/VettEndpoints");
require("dotenv").config({ path: "../.env" });
const { PrismaClient } = require("@prisma/client");
const ServerErrorException = require("../exceptions/server-error");
const {
  serverErrors,
  verificationErrors,
} = require("../exceptions/status-codes");
const BadRequestException = require("../exceptions/bad-requests");
const createVerificationRecord = require("../functions/createVerificationRecord");
const findUser = require("../functions/findUser");

const prisma = new PrismaClient({ log: ["warn", "error"] });

// Utility function to validate data based on type
const validateData = (type, data) => {
  const patterns = {
    bvn: /^\d{11}$/,
    nin: /^\d{11}$/,
    phone_number: /^\d{11}$/,
    drivers_license: /.+/, // Any non-empty value
    voters_id: /.+/, // Any non-empty value
    nuban: { account_number: /.+/, bank_code: /.+/ }, // Non-empty values
  };

  if (!data)
    throw new BadRequestException(
      "Verification data not provided",
      verificationErrors.VERIFICATION_DATA_NOT_PROVIDED
    );

  switch (type) {
    case "bvn":
      if (!data.bvn || !data.bvn.match(patterns.bvn)) {
        throw new BadRequestException(
          "A valid 11 digits BVN required",
          verificationErrors.INVALID_VERIFICATION_DATA
        );
      }
      break;
    case "nin":
      if (!data.nin || !data.nin.match(patterns.nin)) {
        throw new BadRequestException(
          "A valid 11 digits NIN required",
          verificationErrors.VERIFICATION_DATA_NOT_PROVIDED
        );
      }
      break;
    case "phone_number":
      if (
        !data.phone_number ||
        !data.phone_number.match(patterns.phone_number)
      ) {
        throw new BadRequestException(
          "A valid 11 digits phone number is required",
          verificationErrors.VERIFICATION_DATA_NOT_PROVIDED
        );
      }
      break;
    case "drivers_license":
      if (!data.license_number) {
        throw new BadRequestException(
          "Driver's license number required",
          verificationErrors.VERIFICATION_DATA_NOT_PROVIDED
        );
      }
      break;
    case "voters_id":
      if (!data.vin) {
        throw new BadRequestException(
          "Voters ID number required",
          verificationErrors.VERIFICATION_DATA_NOT_PROVIDED
        );
      }
      break;
    case "nuban":
      if (!data.account_number || !data.bank_code) {
        throw new BadRequestException(
          "Account Number and Bank code are required",
          verificationErrors.VERIFICATION_DATA_NOT_PROVIDED
        );
      }
      break;
    default:
      throw new BadRequestException(
        "Unknown data type supplied",
        verificationErrors.INVALID_VERIFICATION_DATA
      );
  }
};

// Utility function to create request configuration
const createRequestConfig = (type, data) => {
  const configMap = {
    bvn: { endpoint: endpoints.bvn, params: { bvn: data.bvn } },
    nin: { endpoint: endpoints.nin, params: { nin: data.nin } },
    phone_number: {
      endpoint: endpoints.phone_number,
      params: { phone_number: data.phone_number },
    },
    drivers_license: {
      endpoint: endpoints.drivers_licence,
      params: { license_number: data.license_number },
    },
    voters_id: { endpoint: endpoints.voters_id, params: { vin: data.vin } },
    nuban: {
      endpoint: endpoints.nuban,
      params: {
        account_number: data.account_number,
        bank_code: data.bank_code,
      },
    },
  };

  return configMap[type] || null;
};

// Get verifications history
const getVerifications = async (req, res) => {
  const { token } = req.headers;
  const { userId } = jwt.decode(token, process.env.JWT_KEY);

  try {
    const results = await prisma.verification.findMany({ where: { userId } });
    return res.status(200).json({
      status: "success",
      message: "User verifications history found",
      data: results,
    });
  } catch (err) {
    throw new ServerErrorException(
      "Something went wrong",
      serverErrors.UNKNOWN_ERROR,
      err
    );
  }
};

// Verify Personnel
const verifyPersonnel = async (req, res) => {
  const { token } = req.headers;
  const { userId } = jwt.decode(token, process.env.JWT_KEY);
  const { title, personnel_name, type, data } = req.body;

  validateData(type, data);

  const requestConfig = createRequestConfig(type, data);
  if (!requestConfig) {
    throw new BadRequestException(
      "Invalid verification type",
      verificationErrors.INVALID_VERIFICATION_DATA
    );
  }
  const verificationCost = 10000;

  const user = await findUser({ id: userId });

  // Check if user does not have enough balance
  if (user.balance < verificationCost)
    throw new BadRequestException(
      "Not enough balance for verification",
      verificationErrors.NOT_ENOUGH_CREDIT
    );

  try {
    // Attempt verification
    const result = await axiosInstance.get(requestConfig.endpoint, {
      params: requestConfig.params,
    });

    // Create verification record
    const record = await createVerificationRecord(
      userId,
      title,
      personnel_name,
      type,
      result.data,
      "success"
    );

    // Deduct verification cost
    await prisma.user.update({
      where: { id: userId },
      data: { balance: { decrement: verificationCost } },
    });

    return res.status(200).json({
      status: "success",
      message: "User data fetched successfully",
      data: record.info,
    });
  } catch (err) {
    // Handle errors from the verification request
    try {
      await createVerificationRecord(
        userId,
        title,
        personnel_name,
        type,
        null,
        "failure"
      );
    } catch (error) {
      throw new ServerErrorException(
        "Cannot create record for failed verification",
        serverErrors.VERIFICATION_RECORD_NOT_CREATED,
        error
      );
    }

    if (err.response && err.response.status === 402) {
      throw new ServerErrorException(
        "Unable to connect to DB",
        serverErrors.DOJAH_RECORD_FETCH_ERROR,
        null
      );
    }

    throw new ServerErrorException(
      err.response?.data?.error || "Verification failed",
      serverErrors.DOJAH_RECORD_FETCH_ERROR,
      err.response?.data
    );
  }
};

module.exports = { getVerifications, verifyPersonnel };
