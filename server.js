var http = require("http");
var fs = require("fs");


function handler(request, response) {

  var endpoint = request.url; 

  if(endpoint === "/") {
    response.writeHead(200, {"Content-Type" : "Text/html"});
    fs.readFile(__dirname + "/public/index.html", function(error, file){
      if(error) {
        console.log(error); return; 
      }
      response.end(file);
    });
  
  }

  else {
    if(endpoint.indexOf(".css") > -1) {
      response.writeHead(200, {"Content-Type" : "Text/css"});

    }

    if(endpoint.indexOf(".png") > -1) {
      response.writeHead(200, {"Content-Type" : "image/png"});
  
    }

     fs.readFile(__dirname + "/public" + endpoint, function(error, file) {
      if (error) {
        console.log(error);
        return;
      }

      response.end(file);
    
    });
  }



}

var server = http.createServer(handler); 


server.listen(3000, function () {
  console.log("working");
})
