const { body, validationResult } = require('express-validator');

const objectPatchValidationRules = () => [
  body('objectToPatch').isLength({ min: 1 }).trim().escape(),
  body('patchToApply').isLength({ min: 1 }).trim().escape()
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
  objectPatchValidationRules,
  validate
};
