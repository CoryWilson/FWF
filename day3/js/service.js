angular.module('myLSApp')
//creates data service
  .service('myLSService',function(){
    //placeholder data
    var heroArray = [
      {
        name:'Superman',
        alias: 'Clark Kent',
        power: 'Is Super'
      },
      {
        name:'Hulk',
        alias: 'Bruce Banner',
        power: 'Ragemaster'
      },
      {
        name:'Batman',
        alias: 'Bruce Wayne',
        power: 'Mad Detective Skillz'
      }
    ];

    //this is our getHeroes function
    this.iNeedAHero = function(){
      var str = localStorage.getItem('heroStorage');
      heroArray = JSON.parse(str) || heroArray;
      return heroArray;
    };

    //this function adds a hero to the array
    this.addHero = function(pHero){
      heroArray.push(pHero);
      lsSave();
    };

    this.removeHero = function(pIndex){
      heroArray.splice(pIndex,1);
      lsSave();
    }

    lsSave = function(){
      var str = JSON.stringify(heroArray);
      localStorage.setItem('heroStorage',str);
    };

    /*//this function removes a hero from the array
    this.removeHero = function(pIndex){
      heroArray.splice(pHero,1);
    };*/
})
