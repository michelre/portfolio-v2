define(["angular", "jquery", "timeline"], function (angular) {
    angular.module("timelineDirective", []).directive("ngTimeline", function () {
        return {
            link: function (scope, element, attrs) {
                createStoryJS({
                    type: 'timeline',
                    width: '100%',
                    height: '600',
                    lang: 'fr',
                    source: 'js/app/directives/data.json',
                    embed_id: 'my-timeline'
                });
            }
        }
    })
});
