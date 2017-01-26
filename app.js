var fs = require("fs");
var http = require("http");
var client = fs.readFileSync("index.html");
var port = process.env.prot || 1337; 


var http_server = http.createServer(function (req, res) {
    res.writeHead(200, {"Content-type":"text/html"});
    res.end(client);
}).listen(port);