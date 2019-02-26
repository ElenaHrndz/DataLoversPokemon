

window.pokemon = {

  getPokemonByNumber: (numberOfPokemon) => {
    numberOfPokemon--;
    const pokemonList = window.main.getPokemonList();
    // console.log(pokemonList[numberOfPokemon]);
    return pokemonList[numberOfPokemon];
  },

  getPokemonByName: (nameOfPokemon) => {
    const pokemonList = window.main.getPokemonList();
    const pokemonByName = window.main.getPokemonMap();
    nameOfPokemon = nameOfPokemon.toLowerCase();
    return pokemonList[pokemonByName.get(nameOfPokemon)];
  },

  filterByType: (filterBy) => {
    const pokemonList = window.main.getPokemonList();
    const result = pokemonList.filter(pokemon => pokemon.type.includes(filterBy));
    return result;
  },
};
