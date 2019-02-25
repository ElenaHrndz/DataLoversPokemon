// DECLARACIONES
// Identificar mis 3 áreas. El input. El botón. El lugar donde se imprime.
const buttonPokemonSingle = document.getElementById("nombre-pokemon");
const input = document.getElementById("valor-pokemon");
const area = document.getElementById("pokemon");

window.pokemon.setPokemonList();




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

   area.innerHTML = pokemon.num + " " + pokemon.name;
})
