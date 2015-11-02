var app = angular.module('app');

app.controller('RepairArtistBidCtrl',function($scope,$http,$stateParams,$state){
	$scope.bidding = false;
	console.log($scope.selectedBid);
	// if(!$scope.selectedBid && $stateParams.bidId) {
	// 	$state.go('home.repair-artists');
	// }
	

	
});