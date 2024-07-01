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
const { handleVerificationErrors } = require("../middlewares/errors");
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

const verifyPersonnel = async (req, res) => {
  const { token } = req.headers;

  const tokenData = jwt.decode(token, process.env.JWT_KEY);
  const { userId } = tokenData;

  const { title, personnel_name, type, data } = req.body;

  if (!type || !data || !title || !personnel_name) {
    throw new BadRequestException(
      "Verification data not provided",
      verificationErrors.VERIFICATION_DATA_NOT_PROVIDED
    );
  }

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
      await axiosInstance
        .get(endpoints.bvn, {
          params: {
            bvn: data.bvn,
          },
        })
        .then(async (result) => {
          const record = await createVerificationRecord(
            userId,
            title,
            personnel_name,
            type,
            result.data
          );

          return res.status(200).json({
            status: "success",
            message: "User data fetched successfully",
            data: record.info,
          });
        })
        .catch((err) => {
          handleVerificationErrors(err);
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

      await axiosInstance
        .get(endpoints.nin, {
          params: {
            nin: data.nin,
          },
        })
        .then(async (result) => {
          const record = await createVerificationRecord(
            userId,
            title,
            personnel_name,
            type,
            result.data
          );

          if (record) {
            return res.status(200).json({
              status: "success",
              message: "User data fetched successfully",
              data: record.info,
            });
          } else {
            return res.status(200).json({
              status: "success",
              message:
                "User data fetched but could not create verification record",
              data: result,
            });
          }
        })

        .catch((err) => {
          handleVerificationErrors(err);
        });

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

      await axiosInstance
        .get(endpoints.phone_number, {
          params: {
            phone_number: data.phone_number,
          },
        })
        .then(async (result) => {
          const record = await createVerificationRecord(
            userId,
            title,
            personnel_name,
            type,
            result.data
          );

          if (record) {
            return res.status(200).json({
              status: "success",
              message: "User data fetched successfully",
              data: record.info,
            });
          } else {
            return res.status(200).json({
              status: "success",
              message:
                "User data fetched but could not create verification record",
              data: result,
            });
          }
        })
        .catch((err) => {
          handleVerificationErrors(err);
        });

    case "drivers_licence":
      // Throw error if licence number is not provided
      if (!data.licence_number) {
        throw new BadRequestException(
          "Driver's licence number required",
          verificationErrors.VERIFICATION_DATA_NOT_PROVIDED
        );
      }

      // Check if licence number is valid
      const licenceNumberPattern = /^[A-Z0-9]{11}$/;
      if (!data.licence_number.match(licenceNumberPattern)) {
        throw new BadRequestException(
          "A valid licence number is required",
          verificationErrors.VERIFICATION_DATA_NOT_PROVIDED
        );
      }

      await axiosInstance
        .get(endpoints.drivers_licence, {
          params: {
            license_number: data.license_number,
          },
        })
        .then(async (result) => {
          const record = await createVerificationRecord(
            userId,
            title,
            personnel_name,
            type,
            result.data
          );

          if (record) {
            return res.status(200).json({
              status: "success",
              message: "User data fetched successfully",
              data: record.info,
            });
          } else {
            return res.status(200).json({
              status: "success",
              message:
                "User data fetched but could not create verification record",
              data: result,
            });
          }
        })
        .catch((err) => {
          handleVerificationErrors(err);
        });

    case "voters_id":
      // Throw error if licence number is not provided
      if (!data.vin) {
        throw new BadRequestException(
          "Voters Id number required",
          verificationErrors.VERIFICATION_DATA_NOT_PROVIDED
        );
      }

      // Check if licence number is valid
      const vinPattern = /^[A-Z0-9]{19}$/;
      if (!data.vin.match(vinPattern)) {
        throw new BadRequestException(
          "A valid voter's identification number is required",
          verificationErrors.VERIFICATION_DATA_NOT_PROVIDED
        );
      }

      await axiosInstance
        .get(endpoints.voters_id, {
          params: {
            vin: data.vin,
          },
        })
        .then(async (result) => {
          const record = await createVerificationRecord(
            userId,
            title,
            personnel_name,
            type,
            result.data
          );

          if (record) {
            return res.status(200).json({
              status: "success",
              message: "User data fetched successfully",
              data: record.info,
            });
          } else {
            return res.status(200).json({
              status: "success",
              message:
                "User data fetched but could not create verification record",
              data: result,
            });
          }
        })
        .catch((err) => {
          handleVerificationErrors(err);
        });

    case "nuban":
      // Throw error if licence number is not provided
      if (!data.account_number || !data.bank_code) {
        throw new BadRequestException(
          "Account Number and Bank code are required",
          verificationErrors.VERIFICATION_DATA_NOT_PROVIDED
        );
      }

      // Check if account number is valid
      const accountNumberPattern = /^[0-9]{10}$/;
      if (!data.account_number.match(accountNumberPattern)) {
        throw new BadRequestException(
          "A valid account number number is required",
          verificationErrors.VERIFICATION_DATA_NOT_PROVIDED
        );
      }

      // Check if bank code is valid
      const bankCodePattern = /^[0-9]+$/;
      if (!data.bank_code.match(bankCodePattern)) {
        throw new BadRequestException(
          "A valid bank code is required",
          verificationErrors.VERIFICATION_DATA_NOT_PROVIDED
        );
      }

      await axiosInstance
        .get(endpoints.nuban, {
          params: {
            account_number: data.account_number,
            bank_code: data.bank_code,
          },
        })
        .then(async (result) => {
          const record = await createVerificationRecord(
            userId,
            title,
            personnel_name,
            type,
            result.data
          );

          if (record) {
            return res.status(200).json({
              status: "success",
              message: "User data fetched successfully",
              data: record.info,
            });
          } else {
            return res.status(200).json({
              status: "success",
              message:
                "User data fetched but could not create verification record",
              data: result,
            });
          }
        })
        .catch((err) => {
          handleVerificationErrors(err);
        });
    default:
      throw new BadRequestException(
        "Unknown data type supplied",
        verificationErrors.INVALID_VERIFICATION_DATA
      );
  }
};

module.exports = { getVerifications, verifyPersonnel };
