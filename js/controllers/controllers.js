var cvControllers = angular.module('cvControllers', []);

cvControllers.controller("MainController", function($scope) {
	$scope.info = {
		firstName: "Elias",
		lastName: "Svensson",
		age: 23,
		education: "Industrial Engineering, Chalmers Institute of Technology"
	};
});

cvControllers.controller('HomeController', function($scope) {
	$scope.info = {
		message: 'Hello world!'
	};
});

cvControllers.controller('AboutController', function($scope) {
	$scope.about = {
		name: 'Elias Svensson',
		age: 23,
		education: 'Industrial Engineering, Chalmers Institute of Technology'
	};
});