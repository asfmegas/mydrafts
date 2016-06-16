angular.module('myDrafts').controller('homeCtrl',function($scope){
	$scope.userActive = {};
	$scope.buttonActive = false;

	$scope.getUserActive = function(){
		if(!$scope.userActive) console.log($scope.visible);
	};
});