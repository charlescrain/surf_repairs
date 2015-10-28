var app = angular.module( 'app' );

app.controller( 'HomeCtrl', function( $scope, $http )  {

	$scope.selectedJob = {};
	$scope.chooseJob = function( selection ){
		$scope.selectedJob =selection;
		console.log(selection);
	};
	$http.get('http://localhost:3000/api/repair-jobs').then(function(result){
			$scope.jobs = result.data;
			console.log(result.data);
		}, function(error){
			console.log(error);
		});
});