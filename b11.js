var http = require("http");
var fs = require("fs");
var server = http.createServer(function (request, response) {
 
  if (request.url == "/") {
    response.writeHead(200, {
      "Context-type": "text/html",
    });

    fs.createReadStream("./b1.html").pipe(response);
  } else if (request.url == "/new_demo") {
    
    request.on("data", function (chunk) {
      let data = "" + chunk;
      var a =   JSON.parse(
        '{"' +
          decodeURI(data)
            .replace(/"/g, '\\"')
            .replace(/&/g, '","')
            .replace(/=/g, '":"') +
          '"}'
      )
      var user = fs.readFileSync("user.txt");
      var b = JSON.parse(user);
      if(a.user == b.user && a.password == b.pass){
       console.log("login success");
      }else{
        console.log("login failure");
      }
    });

    response.end();
  } else {
    response.writeHead(404, {
      "Context-type": "text/plain",
    });
    response.write("404 not found" + request.url);
    response.end();
  }
});

server.listen(3000, function () {
  console.log("Connected Successfull!");
});
