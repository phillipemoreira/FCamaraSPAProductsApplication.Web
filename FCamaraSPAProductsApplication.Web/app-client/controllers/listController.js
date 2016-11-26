app.controller('listController', function ($scope, productService) {

    $scope.products = [{ name: 'teste1', prince: '12' }, {name:'teste2', prince:'2'}];

    productService.getProducts().then(function (results) {

        $scope.products = results.data;

    }, function (error) {
        alert(error.data.message);
    });

});