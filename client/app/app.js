var app = angular.module('app',['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/register');

	$stateProvider
		.state('home',{
			url:'/home',
			templateUrl:'app/components/home/home.html'
			// controller:'HomeCtrl'
		})
		.state('home.job',{
			url:'/job/:jobId',
			templateUrl:'app/components/home/home.job.html'
		})
		.state('new',{
			url:'/new',
			templateUrl:'app/components/home/home.new.html'
		})
		.state('register',{
			url:'/register',
			templateUrl:'app/components/register/register.html'
		})
		.state('login',{
			url:'/login',
			templateUrl:'app/components/login/login.view.html'
		});

		
});