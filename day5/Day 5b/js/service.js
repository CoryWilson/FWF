angular.module("YetAnotherCRUD")
    .service("CupcakeService",function(){
        var cakes = [
            { frosting: "Vanilla", cake:"Yellow", decor:"Plain", price:0.99},
            { frosting: "Vanilla", cake:"Chocolate", decor:"Plaid", price:1.99}
        ];
    
        this.getCupcakes = function(){
            cakes = JSON.parse(localStorage.getItem("cakes")) || cakes;
            return cakes;   
        }
        
        this.getCupcakeAt = function(pIdx){
            this.getCupcakes();
            return cakes[pIdx];
        }
        
        this.addCupcake = function(pCake){
            cakes.push(pCake);   
            localStorage.setItem("cakes",JSON.stringify(cakes));
        }
        
        this.updateCupcake = function(pCake,pCakeIdx){
            cakes.splice(pCakeIdx,1,pCake);
            localStorage.setItem("cakes",JSON.stringify(cakes));
        }
        
        this.removeCupcake = function(pCakeIdx){
            cakes.splice(pCakeIdx,1); 
            localStorage.setItem("cakes",JSON.stringify(cakes));
        }
    });