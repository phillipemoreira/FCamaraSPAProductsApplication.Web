app.factory('productService', function ($http, ngAuthSettings) {

    var serviceBase = ngAuthSettings.apiServiceBaseUri;

    var productsServiceFactory = {};

    var getProducts = function () {

        return $http.get(serviceBase + 'api/products').then(function (results) {
            return results;
        });
    };

    productsServiceFactory.getProducts = getProducts;

    return productsServiceFactory;

});
