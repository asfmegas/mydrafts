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
		.when('/user/:id',{
			controller: 'userCtrl',
			templateUrl: 'view/user.html'
		})
		.when('/about',{
			controller: 'aboutCtrl',
			templateUrl: 'view/about.html'
		})
		.when('/note',{
			controller: 'noteCtrl',
			templateUrl: 'view/note.html'
		})
		.otherwise({
			redirectTo: 'home'
		});
});