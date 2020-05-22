// not working

var http = require('http');
// ./ means third.js and module.js are in the same directory
var dt = require('./module.js');

http.createServer(function(req,res){
    console.log(dt.mydateTime);
    res.end();
}).listen(3000);