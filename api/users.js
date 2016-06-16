/*
	Controle Usuário
*/
var app = require('./app');
var user = require('./controllers/usersCtrl');


exports.root = function(req,res){
	res.json({Server:'ON in the port 3000...'});
};

exports.getUser = function(req,res){
	var login = req.body;

	user.getUser(login,function(result){
		res.json(result);
	});
};

exports.getByIdUser = function(req,res){
	var id = req.params.id;
	
	user.getByIdUser(id,function(result){
		res.json(result);
	});
};

exports.list = function(req,res){
	user.list(function(data){
		res.json(data);
	});
};

exports.save = function(req,res){
	var userBody = req.body;
	user.save(userBody,function(result){
		res.json(result);
	});
};

exports.update = function(req,res){
	var userOld = req.body;
	
	user.update(userOld,function(result){
		res.json(result);
	});
};

exports.delete = function(req,res){
	var id = req.params.id;

	user.delete(id,function(result){
		res.json(result);
	});
};