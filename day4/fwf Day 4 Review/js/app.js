angular.module("employeeApp", [])
    .controller("myController", function($scope, employeeService,JobService){
    $scope.employeeArray = employeeService.getEmployee();
    $scope.employees = {};
    $scope.positions = JobService.getPositions();
    
        $scope.addEmployee = function(){
            employeeService.addEmployee($scope.employees);
            $scope.employees = {};
        }
        
        $scope.removeEmployee = function(idx){
            employeeService.removeEmployee(idx);
        }
    });
