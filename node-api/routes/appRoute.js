const express = require('express');

const {getResponse, getJSONResponse} = require('../controllers/appController');

const router = express.Router();

router.get("/", getResponse);

router.get("/jsonData", getJSONResponse);

module.exports = router;