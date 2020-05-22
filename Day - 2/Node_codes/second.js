var http = require('http');

http.createServer(function(req,res){
    console.log('Hello, Saksham Bisht');
    res.end('Server is responding');
}).listen(5000);

console.log('Hello, Saksham');
//first change to the particular directory, then node filename.js
// since Node.JS is asynchronous, it will not wait for one command
//5000 is port number - but it should be unoccupied
// so it will first print Hello,Saksham and then Hello, Saksham Bisht twice(because of 2 pings of request - one for create)


