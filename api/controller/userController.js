var db = require('../dbConfig');


exports.list = function(callback){

	db.User.find({},function(error,users){
		if(error){
			callback({error:'Não foi possível acessar a rota'});
		}else{
			callback(users);
		};
	});
};

exports.getUser = function(id, callback){

	db.User.findById(id,function(error,user){
		if(error){
			callback({error:'Não foi possível acessar a rota'});
		}else{
			callback(user);
		};
	});
};

exports.save = function(usuario,callback){
	usuario.data = new Date();

	new db.User(usuario).save(function(error,user){
		if(error){
			callback({error:'Não foi possível salvar dados.'});
		}else{
			callback(user);
		};
	});
};

exports.update = function(id,fullname,email,password,callback){

	db.User.findById(id, function(error,user){
		if(user){
			user.fullname = fullname;
		};
		if(email){
			user.email = email;
		};
		if(password){
			user.password = password;
		};
		user.save(function(error,user){
			if(error){
				callback({response: 'Erro ao atualizar dados'});
			}else{
				callback(user);
			};
		});
	});
}

exports.delete = function(id, callback){

	db.User.findById(id,function(error,user){
		if(error){
			callback({error:'Não foi possível apagar os dados'});
		}else{
			user.remove(function(error){
				if(!error){
					callback({response: 'Usuário excluido com sucesso!'});
				};
			});
		};
	});
};