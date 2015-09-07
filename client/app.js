'use-strict';

angular
    .module('app', ['ngRoute', 'ngCookies'])
    //.module('app', ['ui-router'])
    .config(config)
    //.run(run);

config.$inject = ['$routeProvider','$locationProvider'];
function config($routeProvider, $locationProvider) {
    $routeProvider
        // .when('/', {
        //     controller: 'HomeController',
        //     templateUrl: 'home/home.view.html',
        //     controllerAs: 'homeController'
        // })

        .when('/login', {
            controller: 'LoginController',
            templateUrl: 'login/login.view.html',
            controllerAs: 'loginController'
        })

        .when('/register', {
            controller: 'RegisterController',
            templateUrl: 'register/register.view.html',
            controllerAs: 'registerController'
        })

        .otherwise({ redirectTo: '/login' });
}