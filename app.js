// Module
weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

//Routes
weatherApp.config(function($routeProvider){

    $routeProvider

        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'HomeController'
        })
        .when('/forecast', {
            templateUrl: 'pages/forecast.html',
            controller: 'ForecastController'
        })

});

//Services
weatherApp.service('cityService', function(){
    this.city = "New York, NY"
});

//Controllers
weatherApp.controller('HomeController', ['$scope', 'cityService', function($scope, cityService){
    $scope.city = cityService.city;

    $scope.$watch('city', function(){
       cityService.city = $scope.city;
    });
}]);

weatherApp.controller('ForecastController', ['$scope', 'cityService', function($scope, cityService){
    $scope.city = cityService.city;


}]);