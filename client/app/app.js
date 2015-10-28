var app = angular.module('app',['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/splash');

	$stateProvider
		.state('home',{
			url:'/home',
			templateUrl:'app/components/home/home.html'
		})
			.state('home.job',{
				url:'/job/:jobId',
				templateUrl:'app/components/home/home.job.html'
			})
		.state('splash',{
			url:'/splash',
			templateUrl:'app/components/splash/splashView.html'
		})
		.state('new',{
			url:'/new',
			templateUrl:'app/components/new/newJob.html'
		})
		.state('register',{
			url:'/register',
			templateUrl:'app/components/register/register.html'
		})
			.state('register.surfer',{
				url:'/surfer',
				templateUrl:'app/components/register/register.surfers.html'
			})
			.state('register.repair-artist',{
				url:'/repair-artist',
				templateUrl:'app/components/register/register.repair-artists.html'
			})
		.state('login',{
			url:'/login',
				templateUrl:'app/components/login/login.html'
		})
			.state('login.surfer',{
				url:'/surfer',
				templateUrl:'app/components/login/login.surfers.html'
			})
			.state('login.repair-artist', {
				url:'/repair-artist',
				templateUrl:'app/components/login/login.repair-artists.html'
			});


		
});