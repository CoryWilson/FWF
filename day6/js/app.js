/***********
Cory Wilson
FWF1412
Day4
***********/
angular.module('photoApp',['ngRoute'])
  .config(function($routeProvider){
    $routeProvider
      .when("/search",{
        controller: 'searchController',
        templateUrl: 'parts/searchForm.html'
      })
      .when('/search/:keyword', {
        controller:'resultsController',
        templateUrl:'parts/searchResults.html'
      })
      .otherwise({
        redirectTo: '/search'
      })
  })
  .controller('searchController', function($scope,photoService){
    $scope.keywordInput = "";
    $scope.search = function(){
      document.location.hash = '/search/'+$scope.keywordInput;
    }
  })
  .controller('resultsController', function($scope,photoService,$routeParams){
    $scope.keywordInput = $routeParams.keyword;
    $scope.photoArray = photoService.getPhotoArray();

    photoService.getPhotos($scope.keywordInput);

    $scope.search = function(){
      document.location.hash = '/search/'+$scope.keywordInput;
      //photoService.getPhotos($scope.keywordInput);
    }
  });
