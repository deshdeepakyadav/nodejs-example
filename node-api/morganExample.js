const express = require("express");


const app = express();

const morgan = require('morgan');

const middleware = () => { 
    console.log(`My Own middleware is here running`);
}

const {getResponse} = require('./routes/reqRoutes');

app.use(morgan('dev'));
app.use(morgan(middleware));

app.get("/", getResponse);




const port = 8080;
app.listen(port , console.log(`This API is running on port: ${port}`)
);