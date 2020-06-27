var http = require('http');

var server = http.createServer(function(req, res){

	var categoria = req.url;
	res.end('Ola, seja bem vindo');

});
server.listen(3000);
