angular.module('myDrafts').controller('userCtrl',function($scope,$http,$routeParams,$location){
	$scope.user = {};
	$scope.favorite = [];
	$scope.toReturn = false;
	var id = $routeParams.id;

	loadUser = function(callback){
		$http.get("http://localhost:8800/users/"+id).success(function(data){
			callback(data);
		}).error(function(err,status){
			console.log(err);
		});
	};

	loadUser(function(result){
		$scope.user = result;
		$scope.favorite = $scope.user.favorite;
	});

	$scope.logout = function(){
		delete $scope.user;
		$location.path('/login');
	};

	$scope.openForm = function(){
		$scope.toReturn = !$scope.toReturn;
	};
});