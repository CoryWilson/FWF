angular.module('carCrud',['ngRoute'])
  .config(function($routeProvider,$locationProvider){
    //this is how we would get rid of the "#" character
    //(If the feature worked properly w/o server config)
    //$locationProvider.html5Mode(true);
    $routeProvider
      .when('/list',{
        controller:'listController',
        templateUrl:'/parts/pList.html'
      }).when('/new',{
        controller:'newController',
        templateUrl:'/parts/pForm.html'
      }).when('/edit/:idx',{
        controller:'editController',
        templateUrl:'/parts/pForm.html'
      }).otherwise({
        redirectTo:'/list'
      });
  })
  .controller('editController', function($scope,carService,$routeParams){
    $scope.index = $routeParams.idx;
    $scope.car = carService.getCarsAt($scope.index);

    $scope.onSave = function(){
      carService.updateCars($scope.car,$scope.index);
      window.location.hash="#/list";
    };
  })
  .controller('listController', function($scope,carService){
    $scope.cars = carService.getCars();

    $scope.removeCar = function(idx){
      carService.removeCars(idx);
    };
  })
  .controller('newController', function($scope,carService){
    $scope.car = {};

    $scope.onSave = function(){
      carService.addCars($scope.car);
      $scope.car = {};
      window.location.hash = "#/list";
    };
  });
