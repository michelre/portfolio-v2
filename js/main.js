requirejs.config({
    baseUrl: "js",
    waitSeconds: 20,

    shim:{
        "angular":{
            "exports": "angular"
        },
        "angular-route":{
            "deps":["angular"],
            "exports": "angular-route"
        },
        "angular-sanitize":{
            "deps":["angular"],
            "exports": "angular-sanitize"
        },
        "tooltipster":{
            "deps": ["jquery"],
            "exports": "tooltipster"
        },
    },

    paths:{
        "angular": "lib/angular-1.2.8",
        "angular-route": "lib/angular-route",
        "angular-sanitize": "lib/angular-sanitize.min",
        "jquery": "lib/jquery-2.0",
        "tooltipster": "lib/tooltipster.min",
        "highlight": "../highlight",
        "app": "app"
    }
});

require(["angular", "app/app"], function(angular){
    angular.element(document).ready(function() {
        angular.bootstrap(document, ['app']);
    });
});
