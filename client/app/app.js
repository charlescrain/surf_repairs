var app = angular.module('app',['ui.router', 'ngCookies']);

app.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/splash');

	$stateProvider
		.state('home',{
			url:'/home',
			templateUrl:'app/components/home/home.html'
		})
			.state('home.surfers',{
				url:'/surfer',
				templateUrl:'app/components/home/surfers/home.surfers.html'
			})
				.state('home.surfers.job',{
					url:'/job/:jobId',
					templateUrl:'app/components/home/surfers/home.surfers.job.html'
				})
			.state('home.repair-artists',{
				url:'/repair-artist',
				templateUrl:'app/components/home/repair-artists/home.repair-artists.html'
			})
				.state('home.repair-artists.bid',{
					url:'/bid/:bidId',
					templateUrl:'app/components/home/repair-artists/home.repair-artists.bid.html'
				})
				.state('home.repair-artists.job',{
					url:'/job/:jobId',
					templateUrl:'app/components/home/repair-artists/home.repair-artists.job.html'
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
			.state('register.surfers',{
				url:'/surfer',
				templateUrl:'app/components/register/register.surfers.html'
			})
			.state('register.repair-artists',{
				url:'/repair-artist',
				templateUrl:'app/components/register/register.repair-artists.html'
			})
		.state('login',{
			url:'/login',
				templateUrl:'app/components/login/login.html'
		})
			.state('login.surfers',{
				url:'/surfer',
				templateUrl:'app/components/login/login.surfers.html'
			})
			.state('login.repair-artists', {
				url:'/repair-artist',
				templateUrl:'app/components/login/login.repair-artists.html'
			});


		
});