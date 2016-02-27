var handler = require('./src/handler.js');

var http = require('http');
var server = http.createServer(handler); // our server

// set a port for our server to listen to requests with

server.listen(3000, function() {
 console.log("Server is listening on port 3000. ready to accept requests");
});




