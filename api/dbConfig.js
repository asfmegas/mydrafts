var db_string = 'mongodb://localhost/mydraftsdb';

var mongoose = require('mongoose').connect(db_string);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erro ao conectar ao banco.'));

db.once('open',function(){

	var userSchema = mongoose.Schema({
		name:String,
		email:String,
		login:String,
		password:String,
		data: Date,
		favorite:[
			{
				title: String,
				url: String,
				tags: String,
				description: String,
				note: String,
				data: Date
			}
		]
	});

	exports.User = mongoose.model('User',userSchema);
});