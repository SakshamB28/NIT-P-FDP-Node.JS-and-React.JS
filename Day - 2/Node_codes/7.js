//server program with an http header and html content

var http = require('http');
http.createServer(function(req,res){
    // 200 is a status code - server is OK
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('Hello Sabbie');
    res.end();
}).listen(8080);