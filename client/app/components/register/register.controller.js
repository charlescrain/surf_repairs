'use-strict';

app = angular.module('app');


app.controller('RegisterCtrl', function RegisterController($scope,$http){
    $scope.register = register;
    console.log('yo');
    function register(){
        $scope.dataLoading = true;
        console.log('username is: '  + $scope.username);
        surfer = {
            name:$scope.name,
            username:$scope.username, 
            password:$scope.password,
            email:$scope.email
        }
        $http.post('http://localhost:3000/api/surfers/', surfer)
            .success(function(res){
                // $scope.newUser.username
                console.log(res);
            });
        // $http.get('http://localhost:3000/api/surfers/')
        //     .success(function(res){
        //         console.log(res);
        //     });
    }
});



