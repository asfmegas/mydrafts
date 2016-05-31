var usuarios = require('./usuarioDB');

exports.listar = function(request, response){
	usuarios.listarUsuarios(function(usuarios){
		response.status(200).json(usuarios);
	},function(erro){
		response.status(400).json(erro);
	});
};

exports.getById = function(request, response){
	var id = request.params.id;
	usuarios.getByIdUsuario(id,function(err){

	},function(usuario){
		response.status(200).json(usuario);
		console.log(usuario);
	});
};

exports.autenticar = function(request, response){
	var usuario = request.body;
	console.log(usuario);
	response.status(200).json(usuario);
	// usuarios.autenticarUsuario(usuario,function(erro){
	// 	response.status(400).json(erro);
	// },function(resultado){
	// 	response.status(200).json(resultado);
	// });
};

exports.cadastrar = function(request, response){
	var usuario = request.body;
	usuarios.cadastrarUsuario(usuario,function(erro){
		console.log(erro);
	},function(usuario){
		response.status(201).json(usuario);
	});
};