angular.module('myDrafts').controller('createAccountCtrl',function($scope,$http,$location){

	$scope.cadastrarUsuario = function(usuario){
		$http.post('http://localhost:8800/users', usuario).success(function(data){
			$location.path('/login');
		}).error(function(err){
			console.log(err);
		});
	};
});