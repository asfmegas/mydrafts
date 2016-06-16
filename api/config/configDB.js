var mongoose = require('mongoose').connect('mongodb://localhost/testsmongodb');
var db = mongoose.connection;

db.on('error',console.error.bind(console,'Error ao carregar o banco.'));

db.once('open', function(){

	var userSchema = mongoose.Schema({
		fullname:String,
		email:String,
		login:String,
		password:String,
		created_at:Date,
	});

	var favoriteSchema = mongoose.Schema({	
		id_user:String,
		title:String,
		tags:String,
		url:String,
		description:String,
		note:String,
		created_at:Date
	});

	exports.User = mongoose.model('User', userSchema);
	exports.Favorite = mongoose.model('Favorite', favoriteSchema);
});