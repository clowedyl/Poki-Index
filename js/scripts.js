// Where I get my pokemon information from https://pokedex.org/#/pokemon/3

let pokemonRepository = (function() {

let pokemonList = [
    {
        name: 'Bulbasaur', 
        height: 0.7, 
        type: ['grass','poison']
    },
    {
        name: "Charmander", 
        height: 0.6, 
        type: 'fire'
    },
    {
        name: 'Squirtle', 
        height: 0.5, 
        type: 'water'
    },
];

    function add(pokemon) {
        pokemonList.push(pokemon);
    }
    function getAll() {
        return pokemonList;
    }
    return {
        add: add,
        getAll: getAll
    };
})();

pokemonRepository.getAll().forEach(function(pokemon) { 
        if (pokemon.height > 0.6) {
        document.write('<p>' + pokemon.name + ' (height: ' + pokemon.height + ')' +' - Wow, that\'s big'+ '</p>');
        }
        else {(pokemon.height <= 0.6)
        document.write('<p>' + pokemon.name + ' (height: ' + pokemon.height + ')' + '</p>');
    }
});

pokemonRepository.add({name: 'Pikachu', height: 0.4, type: 'electric'});
console.log(pokemonRepository.getAll());