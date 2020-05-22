//string query

var http = require('http');
http.createServer(function(req,res){
    if(req.url == '/'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<html><body><p>This is the admin page.</p></body></html>');
        res.end();
    }
}).listen(8080);
