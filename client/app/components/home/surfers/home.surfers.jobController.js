var app = angular.module('app');

app.controller('SurferJobCtrl',function($scope,$http,$stateParams,$state){
	$scope.edit=false;
	$scope.imageAdd = false;
	$scope.newImages = [];
	$http.get('http://localhost:3000/api/repair-jobs/'+$stateParams.jobId)
			.then(function(res){
				$scope.detailJob = res.data;
				$scope.dimensions = Object.keys($scope.detailJob.boardDimensions);
			}, function(error){
				console.log(error);
			});

	$scope.updateJob = function(job){
		job.completed = false;
		job.pictures = job.pictures.concat($scope.newImages);
		console.log($scope.newImages);
		$http.put('http://localhost:3000/api/repair-jobs/'+job._id,job)
			.then(function(res){
				console.log(res);
				$state.go('home',{}, {reload:true});
			}, function(error){
				$state.go('login',{}, {reload:true});
			});
	};
	$scope.deleteJob = function(job){
		$http.delete('http://localhost:3000/api/repair-jobs/'+job._id,job)
			.then(function(res){
				console.log(res);
				$state.go('home',{}, {reload:true});
			}, function(error){
				console.log(error);
				$state.go('login',{}, {reload:true});
			});
	};
	$scope.changeEdit = function(){
		$scope.edit = !$scope.edit;
	};
	$scope.addImage = function(){
		$scope.imageAdd = !$scope.imageAdd;
	};


});