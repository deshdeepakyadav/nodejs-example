const express = require('express');
const {sum, substract, multiply, division, modular} = require("./helpers");

const app = express();

app.get('/', (req, res)=>{
    res.end('Hello, Printing values on Browser:\n' + 'Sum = ' + sum(10, 2) +'\n' + 
    'Substracrt = ' + substract(10, 2) +'\n' +
    'Multiply = ' + multiply(10, 2) +'\n' +
    'Division = ' + division(10, 2) +'\n' +
    'Remainder =' + modular(10, 2) +'\n'
    );
});

app.listen(3000);