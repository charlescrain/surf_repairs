'use-strict';

angular
    .module('app')
    .controller('LoginController',LoginController);
LoginController.$inject = ['$http', '$location'];

function LoginController($http, $location){
    var loginController = this;
    loginController.login = login;
    loginController.userIn = {}
    loginController.userIn.username ='';
    loginController.userIn.password = '';


    (function initController(){
        console.log('Now initializaing the controller');
    })();

    function login(){
        loginController.dataLoading = true;
        console.log('username is: '  + loginController.username);
        surfer = {username:loginController.username, password:loginController.password}
        // $http.post('localhost:3000/surfers/login', surfer)
        //     .success(function(res){
        //         // loginController.userIn.username
        //         console.log(res);
        //     });
        $http.get('http://localhost:3000/api/surfers/')
            .success(function(res){
                console.log(res);
            });
    }
}
