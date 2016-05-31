var modelo = require('./modelo');
var sha256 = require('sha256');


exports.listarUsuarios = function(getUsuarios,isError){
	modelo.usuarios.find()
		.exec(function(err, usuarios){
			if(err){
				isError(err);
			}else{
				getUsuarios(usuarios);
			};
		});
};

exports.getByIdUsuario = function(id,isErro,getUsuario){
	modelo.usuarios.findById(id)
		.exec(function(err,usuario){
			if(err){
				isErro(err);
			}else if(usuario){
				getUsuario(usuario);
			}else{
				isErro(new Error("Usuário não encontrado!"));
			};
		});
};

exports.autenticarUsuario = function(usuario, isErro, getUsuario){
	usuario.senha = sha256(usuario.senha);
	new modelo.usuarios.find()
		.exec(function(err,resultado){
			if(err){
				isErro(err);
			}else if(resultado){
				getUsuario(resultado);
			}else {
				isErro(new Error("Usuario não cadastrado!"));
			};
		});
};

exports.cadastrarUsuario = function(usuario,quandoErro,quandoSalvar){
	usuario.senha = sha256(usuario.senha);
	new modelo.usuarios(usuario)
		.save(function(err,resultado){
			if(err){
				quandoErro(err);
			}else{
				quandoSalvar(resultado);
			};
		});
};

