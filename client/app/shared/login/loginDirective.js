var app = angular.module('app');
app.directive('login', function($http){
	return {
		restrict:'E',
		templateUrl:'app/shared/login/login.html',
		scope:{
		},
		controllerAs:'login',
		controller:LoginController,
		bindToController:true,
		link:function(scope, elem, attrs){
			scope.endpoint = attrs.userType;
			console.log('login dir link');
		}
	};
});


function LoginController( $scope, $http, $state ){
    $scope.username ='';
    $scope.password = '';

    $scope.login = function (){
        $scope.dataLoading = true;
        console.log( 'username is: '  + $scope.username );
        var user = { username:$scope.username, password:$scope.password };
        
        $http.post( 'http://localhost:3000/auth/' + $scope.endpoint , user)
            .then(function( res ){
                console.log( res );
                $state.go( 'home', {}, { reload:true } );
            }, function( error ){
                $state.reload();
            });
    }
}