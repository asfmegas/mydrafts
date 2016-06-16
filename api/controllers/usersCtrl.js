/*
	Controle Usuário
*/
var db = require('../config/configDB');
var sha256 = require('sha256');
var val = require('validator');

exports.getUser = function(user,callback){
	user.password = sha256(val.trim(val.escape(user.password)));
	user.login = val.trim(val.escape(user.login));

	db.User.findOne({
			login:user.login,
			password:user.password
		},function(error,data){
			if(error) callback(error);
			callback(data);
	});
};

exports.getByIdUser = function(id,callback){
	db.User.findOne({_id:id},function(error,user){
		if(error) callback({error:"Usuário não localizado."});
		callback(user);
	});
};

exports.list = function(callback){
	db.User.find({},function(error,users){
		if(error){
			callback({error:'Erro ao listar dados.'});
		}else{
			callback(users);
		};
	});
};

exports.save = function(user,callback){
	user.created_at = new Date();
	user.password = sha256(val.trim(val.escape(user.password)));

	user.fullname = val.trim(val.escape(user.fullname));
	user.login = val.trim(val.escape(user.login));
	user.email = val.trim(val.escape(user.email));

	new db.User(user).save(function(error,user){
		if(error){
			callback({error:"Não foi possível salvar."})
		}else{
			callback(user);
		};
	});
};

exports.update = function(userOld,callback){
	var userUp = userOld;
	var id = userUp.id;
	db.User.findById(id,function(error,user){
		if(error){
			callback({error:'Usuário não existe!'});
		}else{
			if(userUp.fullname){user.fullname = val.trim(val.escape(userUp.fullname));};
			if(userUp.login){user.login = val.trim(val.escape(userUp.login))};
			if(userUp.email){user.email = val.trim(val.escape(userUp.email))}
			if(userUp.password){user.password = val.trim(val.escape(userUp.password))};
			user.save(function(error,user){
				if(error){
					callback({error:'Não foi possível atualizar dados.'});
				}else{
					callback(user);
				};
			});
		};
	});
};

exports.delete = function(id,callback){

	db.Favorite.remove({id_user:id},function(error){
		if(error) res.json({error:"Não foi possíel apagar favoritos"});
		db.User.findById(id,function(error,user){
			if(error){
				callback({error:"Error ao encontrar usuario."});
			}else{
				user.remove(function(error){
					if(!error) callback({return:"Dados excluidos com sucesso!"});
				});
			};
		});
	});
};