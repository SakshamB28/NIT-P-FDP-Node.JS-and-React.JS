//server example

var http = require('http');
http.createServer(function(req,res){
    res.write('Hello, Mr. Saksham Bisht');
    res.end();  // end the response process
}).listen(8080);