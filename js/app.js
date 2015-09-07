var app = angular.module("cvApp", ['ngRoute', 'cvControllers']);

app.config(['$routeProvider', function ($routeProvider) {
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
}]);