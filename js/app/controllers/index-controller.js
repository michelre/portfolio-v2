define(["angular", "angular-sanitize", "app/services/menu-service"], function(angular){
    var indexModule = angular.module("index", ["ngSanitize", "menuService"]);

    indexModule.controller("indexController", ["$scope", "initMenu", function ($scope, initMenu) {
        var self = $scope;

        self.$on("$routeChangeSuccess", function(){
            initMenu(".home")
        });

    }]);

});
