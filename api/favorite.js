/*
	Controle Favorito
*/

var app = require('./app');
var favorite = require('./controllers/favoriteCtrl');


exports.list = function(req,res){
	var id = req.params.id;

	// res.json({"id":id});
	favorite.list(id,function(result){
		res.json(result);
	});
};

exports.save = function(req,res){
	// Receber: id do usuário e os dados do novo favorito
	var id = req.params.id;
	var newFavorite = req.body;
	newFavorite.id_user = id;

	favorite.save(newFavorite,function(result){
		res.json(result);
	});
	
	// db.User.findById(id,function(error,obj){
	// 	if(error){
	// 		res.json({error:"Não foi possível encontrar o usuário."});
	// 	}else{
	// 		// Atualizando favorito
	// 		obj.update({$set:{favorite:{
	// 			title:favorite.title,
	// 			url:favorite.url,
	// 			tags:favorite.tags,
	// 			nota:favorite.note
	// 		}}},function(error,data){
	// 			if(error){
	// 				res.json({error:"Não foi possível salvar favorito. "+error});		
	// 			}else{
	// 				res.json(data);
	// 			};
	// 		});
	// 	};
	// });
};

exports.update = function(req,res){
	var upFavorite = req.body;

	favorite.update(upFavorite,function(result){
		res.json(result);
	});
};

exports.delete = function(req,res){
	var id = req.params.id;

	favorite.delete(id,function(result){
		res.json(result);
	});
};

