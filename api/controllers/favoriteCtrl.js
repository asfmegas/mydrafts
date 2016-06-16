/*
	Controle Favorito
*/
var db = require('../config/configDB');
var val = require('validator');

exports.list = function(id,callback){

	db.Favorite.find({id_user:id},function(error,favorite){
		if(error) callback(error);
		callback(favorite);
	});
};

exports.save = function(favorite,callback){

	favorite.created_at = new Date();

	favorite.title = val.trim(val.escape(favorite.title));
	// favorite.url = val.trim(val.escape(favorite.url));
	favorite.description = val.trim(val.escape(favorite.description));
	favorite.tags = val.trim(val.escape(favorite.tags));
	// favorite.note = val.trim(val.escape(favorite.note));

	new db.Favorite(favorite).save(function(error,result){
		if(error) callback(error);
		callback(result);
	});
};

exports.update = function(favorite,callback){
	favorite.modifed_at = new Date();
	db.Favorite.findById(favorite._id,function(error,data){

		if(error) callback(error);
		if(data.title){data.title = val.trim(val.escape(favorite.title))};
		if(data.url){data.url = val.trim(favorite.url)};
		if(data.tags){data.tags = val.trim(val.escape(favorite.tags))};
		if(data.description){data.description = val.trim(val.escape(favorite.description))};
		if(data.note){data.note = val.trim(val.escape(favorite.note))};

		data.save(function(error,result){
			callback(result);
		});
	});
};

exports.delete = function(id,callback){

	db.Favorite.findById(id, function(error,favorite){
		if(error) callback({error:"Não foi possível apagar dados."});
		favorite.remove(function(error){
			if(!error) callback({return:"dados apagado com sucesso!"});
		});
	});
};
