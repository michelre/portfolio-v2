define(["angular", "angular-route", "app/controllers/index-controller", "app/controllers/articles-controller",
    "app/controllers/article-details-controller", "app/directives/highlight-directive", "app/directives/tooltip-directive", "app/directives/carousel-directive", "app/directives/compile"], function (angular) {
    return angular.module("app", ["ngRoute", "index", "articles", "articleDetails", "tooltipDirective", "carouselDirective", "compile"]).config(["$routeProvider", function ($routeProvider) {
        $routeProvider.
            when("/", {
                templateUrl: "../template/cv.html",
                controller: "indexController",
                resolve: {
                    menuService: function () {
                    }
                }
            }
        ).
            when("/articles/:folder/:name", {
                templateUrl: "../template/articles-details.html",
                controller: 'articleDetailsController',
                resolve: {
                    menuService: function () {
                    }
                }
            }
        ).
            when("/articles", {
                templateUrl: "../template/articles.html",
                controller: 'articlesController',
                resolve: {
                    menuService: function () {
                    }
                }
            }
        ).
            otherwise({
                redirectTo: "/"
            });
    }]);
});