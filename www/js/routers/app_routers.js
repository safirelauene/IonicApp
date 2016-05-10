(function(){
    "use strict";
    angular.module("myApp").config(function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise("menu/home");
        $stateProvider
        .state("menu", {
            url: "/menu",
            templateUrl: "views/menu.html",
            abstract: true,
            controller: "initCtrl"
        })
        
        .state("menu.home",{
            url: "/home",
            viwes:{
                'menuContent':{
                    templateUrl:"views/home.html"    
                }
            }
            
        });
        
    });
})();