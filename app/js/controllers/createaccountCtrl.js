angular.module('myDrafts').controller('createAccountCtrl',function($scope,$location,httpAPI){

	$scope.registerUser = function(user){
		httpAPI.saveUser(user).then(function(data){
			$location.path('/login');
		},function(error){
			console.log(error);
		});
	};
});