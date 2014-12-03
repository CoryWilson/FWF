/***********************
  Cory Wilson
  FWF1412
  Grocery Store App JS
***********************/
  angular.module("groceryListApp",[])

  .controller("groceryListController", function($scope,groceryListService){
    $scope.list = groceryListService.getItem();
    $scope.item = {};

    $scope.formSubmit = function(){
      groceryListService.addItem($scope.item);
      $scope.item = {};
    };
    $scope.itemDelete = function(idx){
      groceryListService.removeItem(idx);
    };
  })
  .service("groceryListService", function(){
    var items = [];

    this.getItem = function(){
      return items;
    };
    this.addItem = function(pItem){
      items.push(pItem);
    };
    this.removeItem = function(pIndex){
      items.splice(pIndex,1);
    };
  });
