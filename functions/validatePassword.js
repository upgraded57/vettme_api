const validatePassword = (password) => {
  const uppercase = /[A-Z]/; // Regular expression for uppercase letters
  const lowercase = /[a-z]/; // Regular expression for lowercase letters
  const number = /[0-9]/; // Regular expression for digits
  const specialChar = /[!@#$%^.&*]/; // Regular expression for special characters

  if (
    uppercase.test(password) &&
    lowercase.test(password) &&
    number.test(password) &&
    specialChar.test(password) &&
    password.length >= 8 // Minimum length requirement
  ) {
    return true; // Password meets all the requirements
  } else {
    return false; // Password does not meet the requirements
  }
};

module.exports = validatePassword;
