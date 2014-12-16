angular.module('carCrud')
  .service('carService',function(){
    var cars = [
      {
        year:'2014',
        make: 'Subaru',
        model: 'WRX STi',
        bodystyle: 'Hatchback'
      },
      {
        year: '2005',
        make: 'Infiniti',
        model: 'G35',
        bodystyle: 'Coupe'
      }
    ];

    this.getCars = function(){
      cars = JSON.parse(localStorage.getItem('cars')) || cars;
      return cars;
    };
    this.getCarsAt = function(pIdx){
      this.getCars();
      return cars[pIdx];
    };
    this.addCars = function(pCar){
      cars.push(pCar);
      localStorage.setItem('cars',JSON.stringify(cars));
    };
    this.updateCars = function(pCar,pCarIdx){
      cars.splice(pCarIdx,1,pCar);
      localStorage.setItem('cars',JSON.stringify(cars));
    };
    this.removeCars = function(pCarIdx){
      cars.splice(pCarIdx,1);
      localStorage.setItem('cars',JSON.stringify(cars));
    };

  });
