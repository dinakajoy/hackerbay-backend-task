const express = require('express');

const router = express.Router();
const { resizeImageValidationRules, validate } = require('../validations/resizeImageValidations');
const isAuthenticated = require('../middlewares/isAuthenticated');
const resizeImageController = require('../controllers/resizeImageController');

router.post('/', resizeImageValidationRules(), validate, isAuthenticated, resizeImageController.resize);

module.exports = router;
