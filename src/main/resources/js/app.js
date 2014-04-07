'use strict';

angular.module('taskApp', ['ngResource'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
