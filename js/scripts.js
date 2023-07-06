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
    function addListItem(pokemon){
        let pokemonList = document.querySelector('.pokemon-list');
        let listItem = document.createElement('li');
        let button = document.createElement('button');
        button.innerText = pokemon.name;
        button.classList.add('button-class');
        button.addEventListener('click', function (showDetails) {
             console.log(pokemon);
        });
        listItem.appendChild(button);
        pokemonList.appendChild(listItem);
        
    }
    function showDetails(pokemon){
        console.log('<p>' + 'height:' + pokemon.height + '</p>' + '<p>' + 'type' + pokemon.type + '</p>' )
    }
    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem
    };
})();

pokemonRepository.getAll().forEach(function(pokemon) {
   pokemonRepository.addListItem(pokemon);
});

pokemonRepository.add({name: 'Pikachu', height: 0.4, type: 'electric'});
console.log(pokemonRepository.getAll());