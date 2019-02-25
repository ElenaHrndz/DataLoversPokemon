// DECLARACIONES
// Identificar mis 3 áreas. El input. El botón. El lugar donde se imprime.
const buttonPokemonSingle = document.getElementById("nombre-pokemon");
const input = document.getElementById("valor-pokemon");
const area = document.getElementById("pokemon");

window.pokemon.setPokemonList();

window.main = {
  startAllPokemons : () =>{
    callPokemons();
  }
}

function callPokemons(){
  let allCards =``;
  for(let i = 0 ; i < window.pokemon.getPokemonsAmount();i++){
    let pokemon = window.pokemon.getPokemonByNumber(i+1);
    allCards += createACard(pokemon);
  }
  area.innerHTML = allCards;
}

// EVENTOS

buttonPokemonSingle.addEventListener("click", () => {
  //.isNaN()
   const inputOfPokemon = input.value

   let pokemon;
   if(isNaN(inputOfPokemon)){
     pokemon = window.pokemon.getPokemonByName(inputOfPokemon);
   }else{
     pokemon = window.pokemon.getPokemonByNumber(inputOfPokemon);
   }

   area.innerHTML = createACard(pokemon);
})

function createACard(pokemon){
  return `<div class="pokemonCard">
    <img src="${pokemon.img}">
    <p>Name: ${pokemon.name}</p>
    <p>No.: ${pokemon.num}</p>
    <p>Type: ${pokemonTypes(pokemon.type)}</p>
  </div>`;
}

function pokemonTypes(typesOfPokemon){
  var typesToRetrun = ``;

  for(var i = 0; i < typesOfPokemon.length ; i++){
    if(i > 0){
      typesToRetrun +=' y ';
    }
    typesToRetrun += typesOfPokemon[i];
  }
  return typesToRetrun;
}
