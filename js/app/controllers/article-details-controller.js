define(["angular", "angular-sanitize", "app/services/menu-service", "app/directives/timeline-directive"], function(angular){
    var articleDetails = angular.module("articleDetails", ["ngSanitize", "menuService", "highlightDirective"]);

    articleDetails.controller("articleDetailsController", ["$scope", "$routeParams", "$http", "initMenu", "$compile", function ($scope, $routeParams, $http, initMenu, $compile) {
        var self = $scope;        
        self.menuActive = "articles";
        self.content = null;
        self.nbComments = 0;
        self.comments = [];
        self.currentOffset = 0;
        self.currentComment = null;        
        self.articleName = $routeParams["name"].replace(".html", "");

        self.loadContent = function () {            
            $http({
                method: "GET",
                url: "template/articles/" + $routeParams["folder"] + "/" + $routeParams["name"]
            }).success(function (data) {
                    self.content = data;
                    self.loadComments();
                });
        };

        self.loadComments = function () {
            $http({
                method: "GET",
                url: "php/app.php/ws/comments/" + self.articleName + "?offset=" + self.currentOffset + "&limit=10"
            }).success(function (data) {
                    if (data.comments.length > 0) {
                        self.nbComments = parseInt(data.nbComments)
                        self.comments = data.comments;
                    }
                });
        }

        self.nextPage = function () {
            self.currentOffset += 10;
            self.loadComments();
        };

        self.previousPage = function () {
            self.currentOffset -= 10;
            self.loadComments();
        };

        self.addComment = function () {
            self.currentComment.date = new Date();
            self.currentComment.id_article = self.articleName;
            $http({
                method: "PUT",
                url: "php/app.php/ws/comment/" + self.articleName,
                data: self.currentComment
            }).success(function (data) {
                    if (data.status === "ok") {
                        self.nbComments++;
                        self.comments.unshift(self.currentComment);
                        self.currentComment = null;
                    }
                });
        };

        self.$on("$routeChangeSuccess", function(){
            initMenu(".articles");
        });
        self.loadContent();
    }]);
});
