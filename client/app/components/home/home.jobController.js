var app = angular.module('app');

app.controller('JobCtrl',function($scope,$http,$stateParams,$state){
	$scope.detailJob = $scope.selectedJob;
	$scope.dimensions = Object.keys($scope.detailJob.boardDimensions);

	$scope.updateJob = function(job){
		console.log('happening');
		job.completed = false;
		$http.put('http://localhost:3000/api/repair-jobs/'+job._id,job)
			.then(function(res){
				console.log(res);
			}, function(error){
				
			});
	};
	$scope.deleteJob = function(job){
		$http.delete('http://localhost:3000/api/repair-jobs/'+job._id,job)
			.then(function(res){
				console.log(res);
				$state.go('home',{}, {reload:true});
			}, function(error){
				console.log(error);
				$state.go('home',{}, {reload:true});
			});
	};


});