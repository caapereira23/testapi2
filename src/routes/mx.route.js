const express = require('express');
const router = express.Router();

const MxController = require('../controllers/mx.controller');

// get all MX

router.get('/', MxController.getMxList);

module.exports = router;