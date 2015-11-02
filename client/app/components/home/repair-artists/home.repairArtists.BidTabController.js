var app = angular.module('app');

app.controller('HomeRepairBidCtrl',function($scope,$http,$state){
	$scope.bids = [];
	$scope.selectedBid = {};
	console.log('BidTab');
	$scope.chooseBid = function( selection ){
		$scope.selectedBid =selection;
		console.log( selection );
	};

	$http.get( 'http://localhost:3000/api/bids' ).then( function( result ){
			$scope.bids = result.data;
			//This is a horrbile solution, need to get an async for loop or something
			for(var i=0; i< $scope.bids.length; i++){
				$http.get('http://localhost:3000/api/repair-jobs/'+$scope.bids[i].job)
					.then(function(result){
						for(var j=0; j< $scope.bids.length; j++){
							if($scope.bids[j].job === result.data._id){
								$scope.bids[j].job = result.data;
							}
						}
					}, function(error){
						console.log('error');
					});
			}
		}, function( error ){
			console.log( error );
			$scope.bids = [];
			if(error.status === 401){
				$state.go( 'splash',{}, { reload:true } );
			}
		});
});
