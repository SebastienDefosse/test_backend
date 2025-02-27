const express = require('express');
const router = express.Router();
const ctrlCalls = require('../controller/calls');

router.get('/id_agent', ctrlCalls.retourneInfo);

module.exports = router;