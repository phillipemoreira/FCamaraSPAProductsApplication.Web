var app = angular.module('productsApp', ['ngRoute', 'LocalStorageModule']);

app.config(function ($routeProvider) {

    $routeProvider.when("/home", {
        controller: "homeController",
        templateUrl: "/app-client/Views/home.html"
    });

    $routeProvider.when("/login", {
        controller: "loginController",
        templateUrl: "/app-client/Views/login.html"
    });

    $routeProvider.when("/signup", {
        controller: "signupController",
        templateUrl: "/app-client/Views/signup.html"
    });

    $routeProvider.when("/products", {
        controller: "listController",
        templateUrl: "/app-client/Views/list.html"
    });

    $routeProvider.otherwise({ redirectTo: "/home" });

});

var serviceBase = 'http://localhost:8090/';
app.constant('ngAuthSettings', {
    apiServiceBaseUri: serviceBase,
    clientId: 'ngAuthApp'
});

app.config(function ($httpProvider) {
    $httpProvider.interceptors.push('authorizationInterceptorService');
});

app.run(['authorizationService', function (authService) {
    authService.fillAuthData();
}]);






