angular.module('photoApp')
  .service('photoService', function($http){
    //API Key - 86bee16b47ecc3394552e79583770aa6
    //URL: https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=4cbbe7d0909a7353907c85dcb6451e55&tags=batman&extras=url_q%2Curl_l&per_page=10&page=1&format=rest

    var key = '86bee16b47ecc3394552e79583770aa6';
    var photoArray = [];

    this.getPhotoArray = function(){
      return photoArray;
    };

    this.getPhotos = function(keyword){

      //jsonp('url string', {request config object})
    $http.jsonp("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key="+key+"&tags="+keyword+"&extras=url_q%2Curl_l&per_page=10&page=1&format=json&jsoncallback=JSON_CALLBACK")
      .success(function(data){

        photoArray.splice(0);

        for(var i=0; i<data.photos.photo.length; i++){
          var p = data.photos.photo[i];

          var pObject = {
            title:p.title,
            thumb:p.url_q,
            large:p.url_l
          };

          photoArray.push(pObject);
        }

      })
      .error(function(){
        console.log("didn't work");
      });
    };
  });
