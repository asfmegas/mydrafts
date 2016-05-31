var express = require('express');
var app = module.exports = express();
var bodyParser = require('body-parser');

var allowCors = function(req,res,next){

	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	res.header('Access-Control-Allow-Credentials', 'true');

	next();
};

app.listen(8800,function(){
	console.log("Servidor rodando na porta 8800");
});

app.use(allowCors);

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
	extended: true
}));