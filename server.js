var http = require("http");


function handler(request, response) {
  response.writeHead(200, {"Content-Type" : "Text/html"});
  response.write("hey there");
  response.end();
}

var server = http.createServer(handler); 


server.listen(3000, function () {
  console.log("working");
})
