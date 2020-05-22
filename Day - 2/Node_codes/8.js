//string query

var http = require('http');
http.createServer(function(req,res){
    // 200 is a status code - server is OK
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(req.url); // output is /
    res.end();
}).listen(8080);