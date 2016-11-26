app.controller('loginController', function ($scope, $location, authorizationService) {

    $scope.loginData = {
        userName: '',
        password: ''
    };

    $scope.message = '';

    $scope.login = function () {

        authorizationService.login($scope.loginData).then(function (response) {

            $location.path('/products');

        },
         function (err) {
             $scope.message = err.error_description;
         });
    };

});