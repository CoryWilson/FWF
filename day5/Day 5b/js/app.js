angular.module("YetAnotherCRUD",["ngRoute"])
    .config(function($routeProvider){
        $routeProvider
            .when("/list",{
                controller:"ListController",
                templateUrl:"pList.html"
            })
            .when("/new",{
                controller:"NewController",
                templateUrl:"pForm.html"
            })
            .when("/edit/:idx",{
                controller:"EditController",
                templateUrl:"pForm.html"
            })   
            .otherwise({
                redirectTo:"/list"
            })
            
    })
    .controller("EditController",function($scope,CupcakeService,$routeParams){
        $scope.index = $routeParams.idx;
        $scope.cake = CupcakeService.getCupcakeAt($scope.index);
    
        $scope.onSave = function(){
            CupcakeService.updateCupcake($scope.cake,$scope.index);
            window.location.hash="#/list";
        }
    })
    .controller("ListController",function($scope,CupcakeService){
        $scope.cakes = CupcakeService.getCupcakes();
    })

    .controller("NewController",function($scope,CupcakeService){
        $scope.cake = {};
    
        $scope.onSave = function(){
            CupcakeService.addCupcake($scope.cake);
            $scope.cake = {};
            window.location.hash="#/list";
        }
    })

    

