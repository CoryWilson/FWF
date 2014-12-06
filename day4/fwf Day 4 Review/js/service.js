angular.module("employeeApp")
    .service("employeeService", function(){
    var employeeArray = [ 
        {name: "Kase", position: "Developer", age: 20 }
    ];
    
    this.getEmployee = function(){
        console.log("hey guys");
        var str = localStorage.getItem("empItem");
        //parse str
        employeeArray = JSON.parse(str) || employeeArray;
        return employeeArray;
    };
    
    this.addEmployee = function(aEmployee) {
        employeeArray.push(aEmployee);
        eSave();
    };
    
    this.removeEmployee = function(rEmployee) {
        employeeArray.splice(rEmployee,1);
        eSave();
    };
    
    this.getPosition = function(){
        
    }
    
    eSave = function(){
        var str = JSON.stringify(employeeArray);
        localStorage.setItem("empItem",str);
    }
    
})
.service("JobService",function(){
    var pos=[
        {'label':'Boss'},
        {'label':'Doesn\'t Matter'},
        {'label':'You\'re Fired'}
    ]
    this.getPositions = function(){
        return pos;
    }
});