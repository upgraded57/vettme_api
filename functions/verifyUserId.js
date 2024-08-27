// Utility function to verify user ID in request body
const verifyUserId = (id) => {
  if (!id) {
    throw new BadRequestException(
      "User id not provided",
      otpErrors.userId_NOT_PROVIDED
    );
  }
};

module.exports = verifyUserId;
