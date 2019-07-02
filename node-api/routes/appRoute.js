const express = require('express');

const {getResponse, getJSONResponse, postAuthor} = require('../controllers/appController');

const router = express.Router();

router.get("/", getResponse);

router.get("/jsonData", getJSONResponse);

router.post("/postAuthor", postAuthor);

module.exports = router;