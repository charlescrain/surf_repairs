var app = angular.module('app');

app.controller('RepairArtistJobCtrl',function($scope,$http,$stateParams,$state){
	$scope.bidding = false;

	$http.get('http://localhost:3000/api/repair-jobs/'+$stateParams.jobId)
			.then(function(res){
				$scope.detailJob = res.data;
				$scope.dimensions = Object.keys($scope.detailJob.boardDimensions);
			}, function(error){
				console.log(error);
			});
});