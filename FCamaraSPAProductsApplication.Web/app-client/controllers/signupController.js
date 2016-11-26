app.controller('signupController', function ($scope, $location, authorizationService) {

    $scope.savedSuccessfully = false;
    $scope.message = '';

    $scope.registration = {
        userName: '',
        password: '',
        confirmPassword: ''
    };

    $scope.signUp = function () {

        authorizationService.saveRegistration($scope.registration).then(function (response) {

            $scope.savedSuccessfully = true;
            $location.path('/login')
        },
         function (response) {
             var errors = [];
             for (var key in response.data.modelState) {
                 for (var i = 0; i < response.data.modelState[key].length; i++) {
                     errors.push(response.data.modelState[key][i]);
                 }
             }
             $scope.message = "Erro durante a criacao do usuario:" + errors.join(' ');
         });
    };
});