const express = require("express");

const app = express();

const morgan = require('morgan');

const mongoose = require('mongoose');

const env = require('dotenv');
env.config();

mongoose.connect(process.env.DB_URL, { useNewUrlParser : true})
.then(() => {
    console.log(`DB Connected`);
});

mongoose.connection.on('error', err => {
    console.log(`DB Connection error: ${err}`);
});


const appRoute = require('./routes/appRoute');

const middleware = () => { 
    console.log(`My Own middleware is here running`);
}


app.use(morgan('dev'));
app.use(morgan(middleware));

app.use("/", appRoute);

const port = process.env.PORT || 8080;
app.listen(port , console.log(`This API is running on port: ${port}`)
);