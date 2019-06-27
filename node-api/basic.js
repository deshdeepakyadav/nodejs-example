const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("API is running");
});

const port = 8080;
app.listen(port , console.log(`This API is running on port: ${port}`)
);