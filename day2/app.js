//This is a constructor
angular.module("myMovieApp",[])

//This would be a lookup by name:
//angular.module("myMovieApp");

  .controller("myController", function($scope,movieService){
    $scope.movieArray = movieService.getMovies();
    $scope.movie = {};

    $scope.formSubmit = function(){
      movieService.addMovie($scope.movie);
      $scope.movie = {};
    };
    $scope.movieDelete = function(idx){
      movieService.removeMovie(idx);
    };
  })
  .service("movieService", function(){  //no scope in service
                                        //view cannot talk to service
    var movies = [];

    this.getMovies = function(){
      return movies;
    };
    this.addMovie = function(pMovie){ //parameter Movie
      movies.push(pMovie);
    };
    this.removeMovie = function(pIndex){ //parameter Index
      movies.splice(pIndex,1);
    };
  });

// function myController($scope){
//
//   $scope.movieArray = [];
//   $scope.movie = {};
//
//   $scope.formSubmit = function(){
//
//     $scope.movieArray.push($scope.movie);
//     $scope.movie = {};
//   };
//   $scope.movieDelete = function(idx){
//     $scope.movieArray.splice(idx,1);
//   };
// }
