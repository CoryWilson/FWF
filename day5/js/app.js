angular.module('yetAnotherCrud',['ngRoute'])
  .config(function($routeProvider,$locationProvider){
    //this is how we would get rid of the "#" character
    //(If the feature worked properly w/o server config)
    //$locationProvider.html5Mode(true);
    $routeProvider
      .when('/list',{
        controller:'listController',
        templateUrl:'pList.html'
      }).when('/new',{
        controller:'newController',
        templateUrl:'pForm.html'
      }).when('/edit/:idx',{
        controller:'editController',
        templateUrl:'pForm.html'
      }).otherwise({
        redirectTo:'/list'
      })
  })
  .controller('editController', function($scope,cupcakeService,$routeParams){
    $scope.index = $routeParams.idx;
    $scope.cake = cupcakeService.getCupcakesAt($scope.index);

    $scope.onSave = function(){
      cupcakeService.updateCupcakes($scope.cake,$scope.index);
      window.location.hash="#/list";
    };
  })
  .controller('listController', function($scope,cupcakeService){
    $scope.cakes = cupcakeService.getCupcakes();
  })
  .controller('newController', function($scope,cupcakeService){
    $scope.cake = {};

    $scope.onSave = function(){
      cupcakeService.addCupcakes($scope.cake);
      $scope.cake = {};
      window.location.hash = "#/list";
    }
  });
