function myController($scope){ //the logic

  $scope.myArray = [];
  $scope.myFriends = "";


  $scope.onButtonClick = function(){
    if(!$scope.myFriends.length){
      alert("enter something!");
      return;
    }
    $scope.myArray.push($scope.myFriends);
    $scope.myFriends = "";
  };
  $scope.removeItem = function(itemIndex){
    $scope.myArray.splice(itemIndex,1);
  };


  /*$scope.myArray = ["First","Second","Third","Fourth","First"];

  $scope.numClicks = 0;
  $scope.test = "Blargh";

  //$scope makes it accessible to outside
  $scope.onButtonClick = function(){
    $scope.numClicks+=1;
  };*/
}
