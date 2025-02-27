const express = require('express');
const router = express.Router();
const ctrlCalls = require('../controller/calls');

router.get('/', ctrlCalls.retourneInfo);

module.exports = router;