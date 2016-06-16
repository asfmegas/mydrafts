var express = require('express');

var app = module.exports = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

var user = require('./users');
var favorite = require('./favorite');

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});


app.listen(3000, function(){
	console.log("Servidor rodando na porta 3000...");
});

app.get('/', user.root);

app.get('/users', user.list);
app.get('/user/:id', user.getByIdUser);
app.post('/users', user.save);
app.post('/user', user.getUser);
app.put('/users', user.update);
app.delete('/users/:id', user.delete);

app.get('/user/:id/favorite', favorite.list);
app.post('/user/:id/favorite', favorite.save);
app.put('/user/favorite', favorite.update);
app.delete('/user/favorite/:id', favorite.delete);
