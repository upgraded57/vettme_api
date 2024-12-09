const UnauthorizedRequestException = require("../exceptions/unauthorized")

const validateEnvironment = (req, res, next) => {
    const company = req.company

  // Check if environment is live 
  if(!company.isVerified) {
    return next(new UnauthorizedRequestException("Company account not active. Please use sandbox", null))
  } 

  next()
}

module.exports = validateEnvironment