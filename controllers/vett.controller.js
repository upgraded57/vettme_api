const jwt = require("jsonwebtoken");
const axiosInstance = require("./../utils/axiosConfig");
const endpoints = require("./../utils/VettEndpoints");
require("dotenv").config({
  path: "../.env",
});
const { PrismaClient } = require("@prisma/client");
const ServerErrorException = require("../exceptions/server-error");
const {
  serverErrors,
  verificationErrors,
} = require("../exceptions/status-codes");
const BadRequestException = require("../exceptions/bad-requests");
const createVerificationRecord = require("../functions/createVerificationRecord");
const prisma = new PrismaClient({
  log: ["warn", "error"],
});

// Get verifications history
const getVerifications = async (req, res) => {
  const { token } = req.headers;

  const tokenData = jwt.decode(token, process.env.JWT_KEY);
  const { userId } = tokenData;

  //   Query database for user verification history
  await prisma.verification
    .findMany({
      where: { userId },
    })
    .then((results) => {
      res.status(200).json({
        status: "success",
        message: "User verifications history found",
        data: results,
      });
    })
    .catch((err) => {
      throw new ServerErrorException(
        "Something went wrong",
        serverErrors.UNKNOWN_ERROR,
        err
      );
    });
};

// Verify Personnel
const verifyPersonnel = async (req, res) => {
  const { token } = req.headers;

  // Const of verification. Will probably come from request object
  const verificationCost = 300;

  const tokenData = jwt.decode(token, process.env.JWT_KEY);
  const { userId } = tokenData;

  const { title, personnel_name, type, data } = req.body;

  if (!type || !data || !title || !personnel_name) {
    throw new BadRequestException(
      "Verification data not provided",
      verificationErrors.VERIFICATION_DATA_NOT_PROVIDED
    );
  }

  // Store request configuration in variable
  let requestConfig;

  // Configure request based on verification data type
  switch (type) {
    case "bvn":
      // Throw error if user does not provide BVN
      if (!data.bvn) {
        throw new BadRequestException(
          "BVN required",
          verificationErrors.VERIFICATION_DATA_NOT_PROVIDED
        );
      }

      // Parse BVN. Throw error if BVN is invalid
      const bvnPattern = /^\d{11}$/;
      if (!data.bvn.match(bvnPattern)) {
        throw new BadRequestException(
          "A valid 11 digits BVN required",
          verificationErrors.INVALID_VERIFICATION_DATA
        );
      }

      // Send request to dojah database
      requestConfig = async () =>
        await axiosInstance.get(endpoints.bvn, {
          params: {
            bvn: data.bvn,
          },
        });

      break;

    case "nin":
      // Throw error if NIN is not provided
      if (!data.nin) {
        throw new BadRequestException(
          "NIN required",
          verificationErrors.VERIFICATION_DATA_NOT_PROVIDED
        );
      }

      // Check if NIN is valid
      const NINPattern = /^\d{11}$/;
      if (!data.nin.match(NINPattern)) {
        throw new BadRequestException(
          "A valid 11 digits nin is required ",
          verificationErrors.VERIFICATION_DATA_NOT_PROVIDED
        );
      }

      requestConfig = async () =>
        await axiosInstance.get(endpoints.nin, {
          params: {
            nin: data.nin,
          },
        });
      break;

    case "phone_number":
      // Throw error if NIN is not provided
      if (!data.phone_number) {
        throw new BadRequestException(
          "Phone number required",
          verificationErrors.VERIFICATION_DATA_NOT_PROVIDED
        );
      }

      // Check if phone number is valid
      const PhoneNumberPattern = /^\d{11}$/;
      if (!data.phone_number.match(PhoneNumberPattern)) {
        throw new BadRequestException(
          "A valid 11 digits phone number is required ",
          verificationErrors.VERIFICATION_DATA_NOT_PROVIDED
        );
      }

      requestConfig = async () =>
        await axiosInstance.get(endpoints.phone_number, {
          params: {
            phone_number: data.phone_number,
          },
        });
      break;

    case "drivers_license":
      // Throw error if licence number is not provided
      if (!data.license_number) {
        throw new BadRequestException(
          "Driver's license number required",
          verificationErrors.VERIFICATION_DATA_NOT_PROVIDED
        );
      }

      requestConfig = async () =>
        await axiosInstance.get(endpoints.drivers_licence, {
          params: {
            license_number: data.license_number,
          },
        });
      break;

    case "voters_id":
      // Throw error if licence number is not provided
      if (!data.vin) {
        throw new BadRequestException(
          "Voters Id number required",
          verificationErrors.VERIFICATION_DATA_NOT_PROVIDED
        );
      }

      requestConfig = async () =>
        await axiosInstance.get(endpoints.voters_id, {
          params: {
            vin: data.vin,
          },
        });

      break;

    case "nuban":
      // Throw error if licence number is not provided
      if (!data.account_number || !data.bank_code) {
        throw new BadRequestException(
          "Account Number and Bank code are required",
          verificationErrors.VERIFICATION_DATA_NOT_PROVIDED
        );
      }

      // Check if bank code is valid
      // const bankCodePattern = /^[0-9]+$/;
      // if (!data.bank_code.match(bankCodePattern)) {
      //   throw new BadRequestException(
      //     "A valid bank code is required",
      //     verificationErrors.VERIFICATION_DATA_NOT_PROVIDED
      //   );
      // }

      requestConfig = async () =>
        await axiosInstance.get(endpoints.nuban, {
          params: {
            account_number: data.account_number,
            bank_code: data.bank_code,
          },
        });
      break;

    default:
      throw new BadRequestException(
        "Unknown data type supplied",
        verificationErrors.INVALID_VERIFICATION_DATA
      );
  }

  // Process request
  await requestConfig()
    .then(async (result) => {
      // The verification cost will be deducted here

      // If request succeed, create record with status "success" in db
      try {
        const record = await createVerificationRecord(
          userId,
          title,
          personnel_name,
          type,
          result.data,
          "success"
        );

        // Remove cost of verification from user balance
        await prisma.user.update({
          where: {
            id: userId,
          },
          data: {
            balance: {
              decrement: verificationCost,
            },
          },
        });

        // Return a successful record data to user
        return res.status(200).json({
          status: "success",
          message: "User data fetched successfully",
          data: record.info,
        });
      } catch (error) {
        // Throw an error if fetch successful from dojah but record cannot be created in db
        throw new BadRequestException(
          "Verification data not provided",
          verificationErrors.VERIFICATION_DATA_NOT_PROVIDED
        );
      }
    })
    .catch(async (err) => {
      // If djoah fetching fails
      try {
        // Create new record in case of dojah.io failure
        await createVerificationRecord(
          userId,
          title,
          personnel_name,
          type,
          null,
          "failure"
        );
      } catch (error) {
        // Throw error if record cannot be created in db
        throw new ServerErrorException(
          "Cannot create record for failed verification",
          serverErrors.VERIFICATION_RECORD_NOT_CREATED,
          error
        );
      }
      // Throw dojah fetching failure error to user
      // Balance on dojah dashboard is low when err.response.status = 402
      if (err.response.status === 402) {
        throw new ServerErrorException(
          "Unable to connect to DB",
          serverErrors.DOJAH_RECORD_FETCH_ERROR,
          null
        );
      }

      // Throw response text from dojah for generic errors
      throw new ServerErrorException(
        err.response.data.error,
        serverErrors.DOJAH_RECORD_FETCH_ERROR,
        err.response.data
      );
    });
};

module.exports = { getVerifications, verifyPersonnel };
