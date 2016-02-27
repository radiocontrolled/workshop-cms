var http = require("http");
var fs = require("fs");
var querystring = require("querystring");


function handler(request, response) {

  var endpoint = request.url; 

  if(endpoint === "/") {
    response.writeHead(200, {"Content-Type" : "Text/html"});
     fs.readFile(__dirname + "/../public/index.html", function(error, file) {
      if(error) {
        console.log(error); return; 
      }
      response.end(file);
    });
  
  }

  else if(endpoint === "/create/post") {
  
    var allTheData = '';
    request.on('data', function (chunkOfData) {

        allTheData += chunkOfData;
    });

    request.on('end', function () {
      var convertedData = querystring.parse(allTheData);
      console.log(convertedData);
      response.writeHead(300, {"Location": "/"});
      response.write("This is girls");
      response.end();
    });



  }

  else {
    if(endpoint.indexOf(".css") > -1) {
      response.writeHead(200, {"Content-Type" : "Text/css"});

    }

    if(endpoint.indexOf(".png") > -1) {
      response.writeHead(200, {"Content-Type" : "image/png"});
  
    }

     fs.readFile(__dirname + "/../public" + endpoint, function(error, file) {
      if (error) {
        console.log(error);
        return;
      }

      response.end(file);
    
    });
  }
}

module.exports = handler; 
