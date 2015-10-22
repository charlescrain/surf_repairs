var app = angular.module('app',['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/home');

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
		});

		
});