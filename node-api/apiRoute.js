const express = require("express");

const app = express();

const {getResponse} = require('./routes/reqRoutes');

app.get("/", getResponse);

const port = 8080;
app.listen(port , console.log(`This API is running on port: ${port}`)
);