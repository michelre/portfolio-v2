define(["angular", "angular-sanitize", "app/services/menu-service"], function(angular){
    var articlesModule = angular.module("articles", ["ngSanitize", "menuService"]);

    articlesModule.controller("articlesController", ["$scope", "initMenu", function ($scope, initMenu) {
        var self = $scope;

        self.$on("$routeChangeSuccess", function(){
            initMenu(".articles");
        });
    }]);

});
