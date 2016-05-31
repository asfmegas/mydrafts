var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mydraftsdb');

var Schema = mongoose.Schema;

var favoritoSchema = new Schema({
	titulo:{
		type:"string",
		required:true
	},
	url:{
		type:"string",
		required:true
	},
	tags:"string",
	descricao:"string",
	nota:"string",
	data: "string"
});

var usuarioSchema = new Schema({
	nome:{
		type:"string",
		required:true
	},
	login:{
		type:"string",
		required:true
	},
	senha:{
		type:"string",
		required:true
	},
	email:"string",
	favorito:[favoritoSchema]
});

exports.usuarios = mongoose.model('usuarios', usuarioSchema);