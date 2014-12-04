/********************
  Cory Wilson
  FWF1412
  Week 2 Assignment
********************/
angular.module('EmpDirApp')
  .service('EmpDirService', function(){
    var employeeArray = [];
      // {
      //   fName: 'Cory',
      //   lName: 'Wilson',
      //   jobTitle: 'Web Dev'
      // }

    this.getEmployee = function(){
      var str = localStorage.getItem('employeeStorage');
      employeeArray = JSON.parse(str) || employeeArray;
      return employeeArray;
    };
    this.addEmployee = function(pEmployee){
      employeeArray.push(pEmployee);
      lsSave();
    };
    this.removeEmployee = function(pIndex){
      employeeArray.splice(pIndex,1);
      lsSave();
    };

    lsSave = function(){
      var str = JSON.stringify(employeeArray);
      localStorage.setItem('employeeStorage',str);
    };

  })
