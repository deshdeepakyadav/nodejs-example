/*
Getting file reading program in node.js 
load modue 'fs' with node require method
call method readFileSync and readFile using fs object and pass file name as parameter
use data as object to collect response
run file using : node <file-name-with-extension>
 */

/*Blocking Example*/
var fs=require('fs');
var data = fs.readFileSync('test.txt');

console.log(data.toString());
console.log("Blocking Program Ended");

/*Non - Blocking Example*/
fs.readFile('test.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});

console.log("Non Blocking Program started");