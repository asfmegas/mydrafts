angular.module('myDrafts').controller('loginCtrl',function($scope,$location,httpAPI){
	
	$scope.verifyUser = function(user){
		httpAPI.postUser(user).then(function(user){
			$location.path('/user/'+user.data._id);
		},function(error){
			console.log(error);
		});
	};
});