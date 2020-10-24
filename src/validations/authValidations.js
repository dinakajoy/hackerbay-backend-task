const { body, validationResult } = require('express-validator');

const signinValidationRules = () => [
  body('username').isLength({ min: 3 }).trim().escape(),
  body('password').isLength({ min: 5 }).trim().escape()
];

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors = [];
  errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }));

  return res.status(422).json({
    error: extractedErrors,
  });
};

module.exports = {
  signinValidationRules,
  validate
};
