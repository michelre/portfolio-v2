define(["jquery", "angular", "tooltipster"], function($, _angular, _tooltipster){
    var tooltipDirective = angular.module("tooltipDirective", []).directive('ngTooltip', function(){
        return function link(scope, element, attrs){
            var animations = ["slide", "grow", "swing", "fall", "fade"];
            var randomAnimations = Math.round(Math.random()*(animations.length-1));
            var params = JSON.parse(attrs.ngTooltip);
            var content = $('#'+params["idTooltip"]);
            $(element).tooltipster({
                animation: animations[randomAnimations],
                interactive: true,
                position: "right",
                theme: 'tooltipster-default',
                touchDevices: true,
                speed: 500,
                fixedWidth: 400,
                contentAsHTML: true,
                content: content
            });
        }
    });
});


