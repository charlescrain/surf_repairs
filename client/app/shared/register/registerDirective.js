var app = angular.module('app');
app.directive('register', function($http){
	return {
		restrict:'E',
		templateUrl:'app/shared/register/register.html',
		scope:{
		},
		controllerAs:'register',
		controller:RegisterController,
		bindToController:true,
		link:function(scope, elem, attrs){
			scope.endpoint = attrs.userType;
			console.log('register dir link');
		}
	};
});

function RegisterController($scope, $http, $state){
	$scope.register = function(){
		$scope.dataLoading = true;
		user = {
			name:$scope.name,
			username:$scope.username, 
			password:$scope.password,
			email:$scope.email
		}
		$http.post('http://localhost:3000/api/' + $scope.endpoint, user)
		.then(function(res){
			$state.go( 'login.'+$scope.endpoint, {}, { reload:true } );
		console.log(res);
		}, function(errir){
			$state.go( 'login.'+$scope.endpoint, {}, { reload:true } );
		});
		// $http.get('http://localhost:3000/api/surfers/')
		//     .success(function(res){
		//         console.log(res);
		//     });
	};
    $scope.goLogin = function (){
	$state.go( 'login.' + $scope.endpoint, {}, { reload:true } );
    };

}