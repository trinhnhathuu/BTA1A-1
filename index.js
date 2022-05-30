var http = require("http");
var fs = require("fs");
var port = 3000;
var user = JSON.parse(fs.readFileSync("user.json", "utf8"));
var cmt = JSON.parse(fs.readFileSync("cmt.json", "utf8"));

http
  .createServer(function (req, res) {
    
      if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
         fs.createReadStream(__dirname + "/main.html").pipe(res);
      } else if (req.url === "/api/user") {

        var body = "";
        var user1 = user[0].Name;
        var user2 = user[1].Name;
        var user3 = user[2].Name;
        var cmt1 = cmt[0].content;
        var cmt2 = cmt[1].content;
        var cmt3 = cmt[2].content;
        console.log(user[1].Name);
        body += ` <div class="user"><span class="name">${user1}</span><p>${cmt1}</p></div><br><div class="user"><span class="name">${user2}</span><p>${cmt2}</p></div><br><div class="user"><span class="name">${user3}</span>  <p>${cmt3}</p></div>`;

        res.write(body);
        res.end();
      } else {
        res.writeHead(404, { "Content-Type": "text/plain-text" });
        res.end("Not found the page you requested.");
      }
    }
  )
  .listen(port);
