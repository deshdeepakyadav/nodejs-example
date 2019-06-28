const express = require("express");

const app = express();

const morgan = require('morgan');

const appRoute = require('./routes/appRoute');

const middleware = () => { 
    console.log(`My Own middleware is here running`);
}


app.use(morgan('dev'));
app.use(morgan(middleware));

app.use("/", appRoute);

const port = 8080;
app.listen(port , console.log(`This API is running on port: ${port}`)
);