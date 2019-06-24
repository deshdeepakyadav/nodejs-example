var helpers = require("./helpers");

const http = require('http');

const server = http.createServer((req, res) => {
res.end('Hello, Printing values on Browser:\n' + 'Sum = ' + helpers.sum(10, 2) +'\n' + 
'Substracrt = ' + helpers.substract(10, 2) +'\n' +
'Multiply = ' + helpers.multiply(10, 2) +'\n' +
'Division = ' + helpers.division(10, 2) +'\n' +
'Remainder =' + helpers.modular(10, 2) +'\n'
);
});

server.listen(3000);
// const x = helpers.sum(10, 2);
// console.log(x);
// console.log(helpers.substract(10, 2));
// console.log(helpers.multiply(10, 2));
// console.log(helpers.division(10, 2));
// console.log(helpers.modular(10, 2));




