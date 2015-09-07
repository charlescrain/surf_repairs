'use-strict';

angular
    .module('app')
    .controller('RegisterController', RegisterController);
RegisterController.$inject = ['$http','$location'];

function RegisterController($http, $location){
    var registerController = this;
    registerController.register = register;


    (function initController(){
        console.log('Now initializaing the controller');
    })();

    function register(){
        registerController.dataLoading = true;
        console.log('username is: '  + registerController.username);
        surfer = {
            name:registerController.name,
            username:registerController.username, 
            password:registerController.password,
            email:registerController.email
        }
        $http.post('http://localhost:3000/api/surfers/', surfer)
            .success(function(res){
                // registerController.newUser.username
                console.log(res);
            });
        // $http.get('http://localhost:3000/api/surfers/')
        //     .success(function(res){
        //         console.log(res);
        //     });
    }
}