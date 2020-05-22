// routing in server based on different URL
var http = require('http');
http.createServer(function(req,res){
    if(req.url == '/')
    {
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<html><body><p>This is the home page.</p></body></html>');
        res.end();
    }
    else if(req.url == '/student')
    {
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<html><body><p>This is the student page.</p></body></html>');
        res.end();
    }
    else if(req.url == '/teacher')
    {
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<html><body><p>This is the teacher page.</p></body></html>');
        res.end();
    }
    else if(req.url == '/admin')
    {
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<html><body><p>This is the admin page.</p></body></html>');
        res.end();
    }
    else
    {
        res.end('Invalid URL request');
    }
}).listen(8080);

