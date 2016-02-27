var http = require('http');
var message = "I am so happy to be a part of the Node girls workshop";

// handler takes the request from the client, and the response object sends a message back to the client. 
function handler(request, response) {

}

var server = http.createServer(); // our server

// set a port for our server to listen to requests with

server.listen(3000, function() {
 console.log("Server is listening on port 3000. ready to accept requests");
});



