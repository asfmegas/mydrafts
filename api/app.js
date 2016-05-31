var app = require('./appConfig');
var userController = require('./controller/userController');
var validator = require('validator');
var sha256 = require('sha256');

app.get('/',function(req,res){
	res.end('Servidor ON');
});

app.get('/users',function(req,res){

	userController.list(function(rest){
		res.json(rest);
	});
});

app.get('/users/:id',function(req,res){

	var id = validator.trim(validator.escape(req.params.id));

	userController.getUser(id,function(resp){
		res.json(resp);
	});
});

app.post('/users',function(req,res){

	var user = req.body;
	user.name = validator.trim(validator.escape(user.name));
	user.login = validator.trim(validator.escape(user.login));
	// user.password = sha256(validator.trim(validator.escape(user.password)));
	user.password = validator.trim(validator.escape(user.password));
	user.email = validator.trim(validator.escape(user.email));

	userController.save(user,function(resp){
		res.json(resp);
	});
});

app.put('/users',function(req,res){

	var user = req.body;

	user.id = validator.trim(validator.escape(user.id));
	user.name = validator.trim(validator.escape(user.name));
	user.login = validator.trim(validator.escape(user.login));
	user.email = validator.trim(validator.escape(user.email));
	// user.password = sha256(validator.trim(validator.escape(user.password)));

	userController.update(user,function(resp){
		res.json(resp);
	});
});

app.delete('/users/:id',function(req,res){

	var id = validator.trim(validator.escape(req.params.id));
	
	userController.delete(id,function(resp){
		res.json(resp);
	});
});
		