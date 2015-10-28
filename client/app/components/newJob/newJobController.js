var app = angular.module('app');

app.controller('NewJobCtrl',function( $scope, http, $state ){
	$scope.newJob = {};

	$scope.createJob = function ( newJob ){
		newJob.completed = false;
		$http.post( 'http://localhost:3000/api/repair-jobs', newJob )
			.then( function( res ){
				console.log( res );
				$state.go( 'home', {}, { reload:true } );
			}, function( error ){
				console.log( error );
				state.go( 'login',{}, { reload:true } );
			});
	}
});