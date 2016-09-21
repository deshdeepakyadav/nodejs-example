/*
Getting server response program in node.js 
load modue 'http' and 'fs' with node require method
load data from file using fs object 
call method createServer using http object and pass request and response as parameter
use response as object as called all required method
run file using : node <file-name-with-extension>
 */
var http = require("http");
var fs=require('fs');
var data = fs.readFileSync('test.txt');
http.createServer(function (request, response) {

   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
   // Send the response body as "Hello World"
   response.end(data);
}).listen(8080);

// Console will print the message
console.log('Server running at http://127.0.0.1:8080/');