const express = require('express');

const router = express.Router();
const { objectPatchValidationRules, validate } = require('../validations/objectPatchValidation');
const isAuthenticated = require('../middlewares/isAuthenticated');
const objectPatchController = require('../controllers/objectPatchController');

router.patch('/', objectPatchValidationRules(), validate, isAuthenticated, objectPatchController.apply);

module.exports = router;
