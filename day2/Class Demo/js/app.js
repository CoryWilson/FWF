angular.module("myPokemonApp", [])
.controller("myPokemonController", function($scope, pokemonService){
    $scope.myPokemon=pokemonService.getPokemon();
    $scope.pokemon={};
    $scope.submit=function(){
        pokemonService.addPokemon($scope.pokemon);
        $scope.pokemon={};
    }
})
.service("pokemonService", function(){
    var pokemon = [];
    
    this.getPokemon=function(){
        return pokemon;
    }
    
    this.addPokemon = function(pPokemon){
        pokemon.push(pPokemon);
    }
})