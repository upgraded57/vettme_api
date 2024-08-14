const loginErrors = {
  INCOMPLETE_LOGIN_CREDENTIALS: "LG-1000",
  INVALID_EMAIL_PATTERN: "LG-1001",
  INCORRECT_PASSWORD: "LG-1002",
  USER_DOES_NOT_EXIST: "LG-1003",
  USER_INACTIVE: "LG-1004",
  USER_UNVERIFIED: "LG-1005",
};

const signupErrors = {
  INCOMPLETE_SIGNUP_CREDENTIALS: "RG-1000",
  INVALID_EMAIL_PATTERN: "RG-1001",
  INVALID_FULLNAME_PATTERN: "RG-1002",
  INVALID_NIN_PATTERN: "RG-1003",
  INVALID_PHONE_NUMBER_PATTERN: "RG-1004",
  USER_WITH_EMAIL_ALREADY_EXISTS: "RG-1005",
  USER_WITH_PHONE_NUMBER_ALREADY_EXISTS: "RG-1006",
  USER_WITH_NIN_ALREADY_EXISTS: "RG-1007",
};

const otpErrors = {
  USER_ID_NOT_PROVIDED: "OTP-1000",
  OTP_NOT_PROVIDED: "OTP-1001",
  INVALID_OTP: "OTP-1002",
  OTP_BLACKLISTED: "OTP-1003",
  USER_ALREADY_ACTIVE: "OTP-1004",
};

const verificationErrors = {
  USER_DATA_MISMATCH: "VE-1000",
  DATABASE_VERIFICATION_ERROR: "VE-1001",
  OLD_PASSWORD_MISMATCH: "VE-1002",
  UNAUTHORIZED_RESOURCE_ACCESS: "VE-1003",
  VERIFICATION_DATA_NOT_PROVIDED: "VE-1004",
  INVALID_VERIFICATION_DATA: "VE-1005",
};

const authenticationErrors = {
  UNAUTHORIZED_CORS_ACCESS: "AE-1000",
  AUTHENTICATION_DATA_NOT_PROVIDED: "AE-1001",
  COOKIE_NOT_PROVIDED: "AE-1002",
};

const notFoundErrors = {
  USER_NOT_FOUND: "NF-1000",
};

const serverErrors = {
  DOJAH_AUTHENTICATION_ERROR: "SE-1000",
  DOJAH_RECORD_FETCH_ERROR: "SE-1001",
  REQUEST_TIMEOUT_ERROR: "SE-1002",
  NETWORK_RESET_ERROR: "SE-1003",
  NETWORK_ABORT_ERROR: "SE-1004",
  VERIFICATION_RECORD_NOT_CREATED: "SE-1005",
  UNKNOWN_ERROR: "SE-1005",
};

const paymentErrors = {
  PAYSTACK_FAILED_PAYMENT: "PE-1000",
  AMOUNT_NOT_PROVIDED: "PE-1001",
};

module.exports = {
  loginErrors,
  signupErrors,
  otpErrors,
  verificationErrors,
  authenticationErrors,
  notFoundErrors,
  serverErrors,
  paymentErrors,
};
