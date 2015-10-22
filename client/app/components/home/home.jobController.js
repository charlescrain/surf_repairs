var app = angular.module('app');

app.controller('JobCtrl',function($scope,$http,$stateParams,$state){
	$http.get('http://localhost:3000/api/repair-jobs/'+$scope.selectedJob._id)
			.then(function(res){
				$scope.detailJob = res.data;
				$scope.dimensions = Object.keys($scope.detailJob.boardDimensions);
			}, function(error){
				console.log(error);
			});

	$scope.updateJob = function(job){
		console.log('happening');
		job.completed = false;
		$http.put('http://localhost:3000/api/repair-jobs/'+job._id,job)
			.then(function(res){
				console.log(res);
				$state.go('home',{}, {reload:true});
			}, function(error){
				$state.go('home',{}, {reload:true});
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