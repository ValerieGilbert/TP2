var express = require('express');
var app = express();

app.get('/', function (req, res) {
   res.send('<h1>Hail Hydra</h1>');
})

var server = app.listen(8081, function () {
	// for (var p in p) {console.log(p)}
   var host = server.address().address
   var port = server.address().port
   
   console.log("Exemple l'application écoute sur http://%s:%s", host, port)
})