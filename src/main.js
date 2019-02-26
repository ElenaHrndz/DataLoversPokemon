/* global Map : true*/
// DECLARACIONES
// Identificar mis 3 áreas. El input. El botón. El lugar donde se imprime.
const buttonPokemonSingle = document.getElementById("nombre-pokemon");
const input = document.getElementById("valor-pokemon");
const area = document.getElementById("pokemon");
const kindsOfPokemonButtons = document.getElementsByClassName('dropdown-item');

const urlAllPokemon = `https://pokemondata-b60b0.firebaseio.com/pokemon.json`;

let pokemonList;
let pokemonByName = new Map();

window.main = {
  getPokemonList:()=>{
    return pokemonList;
  },

  getPokemonMap:()=>{
    return pokemonByName;
  }
}

setPokemonList();
setButtonFilters();

//

function callPokemons(){
  let allCards = ``;
  for (let i = 0; i < pokemonList.length; i++) {
    let pokemon = window.pokemon.getPokemonByNumber(i + 1);
    allCards += createACard(pokemon);
  }
  area.innerHTML = allCards;
}

function callPokemonsByType(pokemonsOfType){
  let allCards = ``;
  for (let i = 0; i < pokemonsOfType.length; i++) {
    let pokemon = window.pokemon.getPokemonByNumber(pokemonsOfType[i].id);
    allCards += createACard(pokemon);
  }
  area.innerHTML = allCards;
}

function createACard(pokemon) {
  return `  <button style="width: 13rem">
    <img class="card-img-top" alt="imagen de pokemon" src="${pokemon.img}">
    <div class="card-body">
    <p class="card-header">Name: ${pokemon.name}</p>
    <p class="list-group-item">ID: ${pokemon.num}</p>
    <p class="list-group-item">Type: ${pokemonTypes(pokemon.type)}</p>
  </div>
  </button>`;
}

function pokemonTypes(typesOfPokemon) {
  var typesToRetrun = ``;

  for (var i = 0; i < typesOfPokemon.length; i++) {
    if (i > 0) {
      typesToRetrun += ' y ';
    }
    typesToRetrun += typesOfPokemon[i];
  }
  return typesToRetrun;
}

function setPokemonList() {
  fetch(urlAllPokemon)
  .then((response) => {
    return response.json()
  })
  .then((dataPokemon) => {
    pokemonList = dataPokemon;
    callPokemons();
    for(var i = 0 ; i < pokemonList.length; i++){
      pokemonByName.set(pokemonList[i].name.toLowerCase(), i);
    }
  })
  // .catch((error) =>{
  //
  // })
}

function setButtonFilters(){
  for(let i = 0; i < kindsOfPokemonButtons.length; i++){
    kindsOfPokemonButtons[i].addEventListener("click", () => {
      //.isNaN()
      const type = kindsOfPokemonButtons[i].id;

      const pokemonTypes = window.pokemon.filterByType(type)

      callPokemonsByType(pokemonTypes);
    })
  }
}
// EVENTOS

buttonPokemonSingle.addEventListener("click", () => {
  //.isNaN()
  const inputOfPokemon = input.value

  let pokemon;
  if (isNaN(inputOfPokemon)) {
    pokemon = window.pokemon.getPokemonByName(inputOfPokemon);
  } else {
    pokemon = window.pokemon.getPokemonByNumber(inputOfPokemon);
  }

  area.innerHTML = createACard(pokemon);
})
