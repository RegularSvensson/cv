var app = angular.module("cvApp", ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/', {
		controller: 'HomeController'
		templateUrl: 'home.html'
	})
	.when('/about', {
		controller: 'AboutController',
		templateUrl: 'about.html'
	})
	.otherwise({
		redirectTo: '/'
	});

}]);


/*
app.config(function ($routeProvider) {
	$routeProvider
	.when('/', {
		controller: 'HomeController',
		templateUrl: 'views/home.html'
	})
	.when('/about', {
		controller: 'AboutController',
		templateUrl: 'views/about.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});
*/