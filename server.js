var http = require('http')
var port = 8080;
http.createServer(function(req, res){
res.writeHead(200, {'Content-Type': 'text/plain'});
res.end('hello azure\n');
}).listen(port);
console.log('server running');