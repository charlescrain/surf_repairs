var app = angular.module('app');

app.controller('HomeRepairBidCtrl',function($scope,$http,$state){
	$scope.jobs = [];
	$scope.selectedJob = {};
	console.log('here');
	$scope.chooseJob = function( selection ){
		$scope.selectedJob =selection;
		console.log( selection );
	};

	$http.get( 'http://localhost:3000/api/bids' ).then( function( result ){
			$scope.jobs = result.data;
			console.log( result.data );
		}, function( error ){
			console.log( error );
			$scope.jobs = [];
			if(error.status === 401){
				$state.go( 'splash',{}, { reload:true } );
			}
		});
});
