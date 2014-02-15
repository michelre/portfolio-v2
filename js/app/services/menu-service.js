define(["jquery", "angular"], function($, angular){
   var menuService = angular.module("menuService", []);
   menuService.factory("initMenu", function(){
       return function(selector){
           $(selector).addClass("active")
           $("li").not(selector).removeClass("active");
       }
    });
});
