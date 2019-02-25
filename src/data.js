/*global Map: true*/
// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

let pokemonList;
let pokemonByName = new Map();



window.pokemon = {

  setPokemonList: () => {
     const urlAllPokemon = `https://pokemondata-b60b0.firebaseio.com/pokemon.json`

    fetch(urlAllPokemon)
    .then((response) => {
      return response.json()
    })
    .then((dataPokemon) => {
      pokemonList = dataPokemon;

      //pokemonByName.Set(key, data);
      for(var i = 0 ; i < pokemonList.length; i++){
        pokemonByName.set(pokemonList[i].name.toLowerCase(), i);
      }

      window.main.startAllPokemons();
      // console.log(dataPokemon[0].name);
      //   area.innerHTML = `
      //   <div>
      //     <h1>Tu pokemon es ${dataPokemon.name} y es de tipo ${pokemonTypes(dataPokemon.types)}</h1>
      //     <img src="${dataPokemon.sprites.front_default}"/>
      //   </div>
      //   `;
    })
    .catch((error) => {
      console.log(error);
    })
  },

  getPokemonByNumber:(numberOfPokemon) => {
    numberOfPokemon--;
    return pokemonList[numberOfPokemon];
  },

  getPokemonByName:(nameOfPokemon) => {
    nameOfPokemon = nameOfPokemon.toLowerCase();
    return pokemonList[pokemonByName.get(nameOfPokemon)];
  },

  getPokemonsOfType: (pokemonType) => {
    let pokemonsIdsToReturn = [];
    for(let i = 0; i < pokemonList.length; i++){
      for(let j = 0; j < pokemonList[i].type.length; j++){
        if(pokemonType == pokemonList[i].type[j]){
          pokemonsIdsToReturn.add(i);
        }
      }
    }
    return pokemonsIdsToReturn;
  },

  getPokemonsAmount: () => {
    return pokemonList.length;
  }
};
