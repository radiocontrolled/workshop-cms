
var fs = require('fs');
var querystring =  require('querystring');

function handler (request, response) {

  var endpoint = request.url; 

  if (endpoint === '/') {

    // '../Applications/MAMP/htdocs/workshop-cms/src/index.html'

    fs.readFile(__dirname + "/../public/index.html", function(error, file) {
     


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

  else if (endpoint === '/node') {

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("This is node");
    response.end();

  } 

  else if (endpoint === '/girls') {

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("This is girls");
    response.end();

  } 

  else if (endpoint === '/create-post') {

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
  

    if(endpoint.indexOf(".css") > -1 ) {
      response.writeHead(200, {"Content-Type": "text/css"});

    }
    
    if(endpoint.indexOf(".jpg") > -1 ) {
      response.writeHead(200, {"Content-Type": "image/jpg"});
    }

    if(endpoint.indexOf(".ico") > -1 ) {
      response.writeHead(200, {"Content-Type": "image/x-icon"});
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

