angular.module('myDrafts').controller('userCtrl',function($scope,$http,$routeParams,$location,httpAPI){
	var id = $routeParams.id;
	$scope.user = {};
	$scope.favorite = [];
	$scope.toReturn = false;

	var getUser = function(){
		httpAPI.getByIdUser(id).then(function(user){
			$scope.user = user.data;
			getFavorite();
		},function(error){
			console.log(error);
		});
	};

	var getFavorite = function(){
		httpAPI.getFavorite(id).then(function(result){
			$scope.favorite = result.data;
		},function(error){
			console.log(error);
		});
	};

	$scope.registerFavorite = function(favorite){
		httpAPI.saveFavorite(id,favorite).then(function(result){
			$scope.openForm();
			getFavorite();
			delete $scope.newFavorite;
		},function(error){
			console.log(error);
		});
	};

	$scope.dropFavorite = function(favorite){
		var id = favorite._id;
		httpAPI.deleteFavorite(id).then(function(result){
			getFavorite();
		},function(error){
			console.log(error);
		});
	};

	$scope.updateFav = function(favorite){
		httpAPI.updateFavorite(favorite).then(function(result){
			if($scope.isViewDesc == true){
				$scope.isViewDesc = false;
			};
			getFavorite();
		},function(error){
			console.log(error);
		});
	};

	$scope.logout = function(user){
		delete $scope.user;
		$location.path('home');
	};

	$scope.openForm = function(){
		$scope.toReturn = !$scope.toReturn;
	};

	$scope.goNote = function(){
		$location.path('note');
	};

	getUser();
});