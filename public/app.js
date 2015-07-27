(function() {
    angular.module('foodiesApp',['ui.bootstrap','ui.router','foodies.services']);
    angular.module('foodiesApp')
        .config(['$stateProvider','$urlRouterProvider', foodiesConfig])
        .controller('mainController', ['$scope',mainController]);


    function foodiesConfig($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state('authorize',{
                url:'/authorize',
                templateUrl:'/app/authorize/authorize.html'
            })
            .state('error',{
                url:'/error',
                templateUrl:'views/partials/_error.html'
            })
            .state('profile',{
                url:'/profile',
                templateUrl:'views/partials/_profile.html'
            })
            .state('communities',{
                url:'/communities',
                templateUrl:'views/partials/_communities.html'
            })
    }

    function mainController($scope){
        $scope.message = 'Welcome';
        console.log($scope.message);
    }

}());
