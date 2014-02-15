define(["angular", "jquery", "highlight/build/highlight.pack"], function(angular, $, hljs){
    angular.module("highlightDirective", []).directive("ngHighlight", function(){
        return function link(scope, element, attrs){
            $(element).addClass("hljs");
            var code = $(element).html();
            var language = attrs.ngHighlight;
            $(element).html(hljs.highlight(language, code).value);
            
        }
    });
});
