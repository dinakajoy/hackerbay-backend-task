const express = require('express');

const router = express.Router();
const { signinValidationRules, validate } = require('../validations/authValidations');
const authController = require('../controllers/authController');

router.post('/signin', signinValidationRules(), validate, authController.signin);

module.exports = router;
