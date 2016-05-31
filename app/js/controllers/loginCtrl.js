angular.module('myDrafts').controller('loginCtrl',function($scope,$http,$location){
	var usuarios = [];

	var carregarUsuario = function(callback){
		$http.get("http://localhost:8800/users").success(function(dados){
			usuarios = dados;
			callback(usuarios);
		}).error(function(err){
			console.log(err);
		});
	};

	$scope.verificarUsuario = function(result){
		carregarUsuario(function(result){
			usuarios = result;
			usuarios.filter(function(dados){
				if(dados.login === $scope.usuario.login && dados.password === $scope.usuario.password){
					$location.path('/users/'+dados._id);
				};
			});
		});
	};
});