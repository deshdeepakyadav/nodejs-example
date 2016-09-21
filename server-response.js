/*
Getting server response program in node.js 
load modue 'http' with node require method
call method createServer using http object and pass request and response as parameter
use response as object as called all required method
run file using : node <file-name-with-extension>
 */

var http = require("http");

http.createServer(function (request, response) {

   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
   // Send the response body as "Hello World"
   response.end('Hello World\n');
}).listen(8080);

// Console will print the message
console.log('Server running at http://127.0.0.1:8080/');