angular.module('myDrafts').config(function($routeProvider){
	$routeProvider
		.when('/home',{
			controller: 'homeCtrl',
			templateUrl: 'view/home.html'
		})
		.when('/create',{
			controller: 'createAccountCtrl',
			templateUrl: 'view/createaccount.html'
		})
		.when('/login',{
			controller: 'loginCtrl',
			templateUrl: 'view/login.html'
		})
		.when('/users/:id',{
			controller: 'userCtrl',
			templateUrl: 'view/user.html'
		})
		.when('/sobre',{
			controller: 'aboutCtrl',
			templateUrl: 'view/about.html'
		})
		.otherwise({
			redirectTo: 'home'
		});
});