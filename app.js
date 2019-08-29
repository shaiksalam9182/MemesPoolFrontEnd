var appModule = angular.module('App',['ngMaterial','ui.router','ngRoute']);


appModule.config(function($stateProvider,$urlRouterProvider,$locationProvider){
    $urlRouterProvider.when("","/feed");

    $stateProvider.
        state('nav',{
            name:'nav',
            url:'',
            templateUrl:'navbar.html',
            controller:'navController'
        })

        .state('nav.feed',{
            name:'feed',
            url:'/feed',
            templateUrl:'feed.html',
            controller:'feedController'
        })

})

appModule.controller('mainController',function($scope){
    
})

appModule.controller('navController',function($scope){

})

appModule.controller('feedController',function($scope){

})

