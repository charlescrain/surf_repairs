'use-strict';

angular
    .module('app')
    .controller('LoginCtrl',LoginController);

function LoginController($scope, $http, $state){
    console.log('hey!');
    $scope.username ='';
    $scope.password = '';

    $scope.login = function (){
        $scope.dataLoading = true;
        console.log('username is: '  + $scope.username);
        surfer = {username:$scope.username, password:$scope.password}
        // $http.post('localhost:3000/surfers/login', surfer)
        //     .success(function(res){
        //         // $scope.userIn.username
        //         console.log(res);
        //     });
        $http.post('http://localhost:3000/auth',surfer)
            .success(function(res){
                console.log(res);
                $state.go('home',{}, {reload:true});
            });
    }
}
