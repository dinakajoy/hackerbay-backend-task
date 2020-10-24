const express = require('express');

const router = express.Router();
const isAuthenticated = require('../middlewares/isAuthenticated');
const objectPatchController = require('../controllers/objectPatchController');

router.patch('/', isAuthenticated, objectPatchController.apply);

module.exports = router;
