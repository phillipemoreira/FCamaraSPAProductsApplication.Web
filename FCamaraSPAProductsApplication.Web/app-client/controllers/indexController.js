app.controller("indexController", function ($scope, $location, authorizationService) {

    $scope.logOut = function () {
        authorizationService.logOut();
        $location.path('/home');
    }

    $scope.authentication = authorizationService.authentication;

});


