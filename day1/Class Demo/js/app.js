
function myController($scope){
    // This defines our array of data, including placeholder data.
    // Probably a terrible name for a variable...
    $scope.array = ["first" , "second" , "third" ];
    // Defines the myFriends variable used by the text input.
    $scope.myFriends = '';
    
    // This is run upon form submission.
    $scope.onButtonClick = function(){
        // Validate that the user has entered something
        if(!$scope.myFriends.length){
            alert("Enter Something!");
            return;
        }
        // Add the input to the array
        $scope.array.push($scope.myFriends);
        // Clean up the form for further use.
        $scope.myFriends = "";
    }
    // Removes an item from the array at the specified index.
    $scope.removeItem = function(itemIndex){
        $scope.array.splice(itemIndex,1);
    }
}