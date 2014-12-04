/**************
  Cory Wilson
  FWF1412
  Day3
**************/

//just for data
//local storage api
angular.module('myLSApp',[])
  .controller('mainController',function($scope,myLSService){
    //initialize variables for the view
    $scope.heroArray = myLSService.iNeedAHero();
    $scope.heroInput = {};

    //upon form submission...
    $scope.addHero = function(){
      myLSService.addHero($scope.heroInput);
      $scope.heroInput = {};
    };

    $scope.removeHero = function(idx){
      myLSService.removeHero(idx);
    }
  })
