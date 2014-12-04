/********************
  Cory Wilson
  FWF1412
  Week 2 Assignment
********************/
angular.module('EmpDirApp',[])
  .controller('mainController',function($scope,EmpDirService){
    $scope.employeeArray = EmpDirService.getEmployee();
    $scope.employeeInput = {};

    $scope.addEmployee = function(){
      EmpDirService.addEmployee($scope.employeeInput);
      $scope.employeeInput = {};
    };

    $scope.removeEmployee = function(emp){
      EmpDirService.removeEmployee(emp);
    };

  })
