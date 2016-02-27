var http = require('http');
var fs = require('fs');

function handler (request, response) {

	if (request.url === "/") {

		fs.readFile(__dirname + '/public/index.html', function(error, file) {
			if (error) {
				console.log(error);
				return;
			}
			else {
				response.writeHead(200, {"Content-Type": "text/html"});
			}
			response.end(file);
		});
	}
}


// var http = require('http');
// var message = "I am so happy to be a part of the Node girls workshop";

// // handler takes the request from the client, and the response object sends a message back to the client. 
// function handler(request, response) {
// 	var method = request.method;
// 	console.log(request); //this is going to tell us which http method we're usin
// 	var endpoint = request.url; 
// 	console.log(endpoint);

// 	if (endpoint === "/node") {
// 		response.write("looking at a node page");

// 	} else {
// 		response.writeHead(200, {"Content-Type": "text/html"}); //this is the header
// 		response.write(message); //this is the response body
// 	}
// response.end(); //finish response
// }

var server = http.createServer(handler); // our server

// set a port for our server to listen to requests with

server.listen(3000, function() {
 console.log("Server is listening on port 3000. ready to accept requests");
});



