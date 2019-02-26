 const pokemon = require('../src/data.js');
 //require(`https://pokemondata-b60b0.firebaseio.com/pokemon.json`);
describe('pokemon', () => {
  it('is an object', () => {
    expect(typeof pokemon).toBe('object');
  });

  // describe('pokemon.setPokemonList', () => {
  //   it('is a function', () => {
  //     expect(typeof window.pokemon.setPokemonList).toBe('function');
  //   });

    describe('pokemon.getPokemonByNumber', () => {
      it('is a function', () => {
        expect(typeof window.pokemon.getPokemonByNumber).toBe('function');
      });
    });

    describe('pokemon.getPokemonByName()', () => {
      it('is a function', () => {
        expect(typeof window.pokemon.getPokemonByName).toBe('function');
      });
    });
    describe('pokemon.filterByType', () => {
      it('is a function', () => {
        expect(typeof window.pokemon.filterByType).toBe('function');
      });
    });
    // it('should return [{"id":147,"num":"147","name":"Dratini","img":"http://www.serebii.net/pokemongo/pokemon/147.png","type":["Dragon"],"height":"1.80 m","weight":"3.3 kg","candy":"Dratini Candy","candy_count":25,"egg":"10 km","spawn_chance":0.3,"avg_spawns":30,"spawn_time":"06:41","multipliers":[1.83,1.84],"weaknesses":["Ice","Dragon","Fairy"],"next_evolution":[{"num":"148","name":"Dragonair"},{"num":"149","name":"Dragonite"}]},{"id":148,"num":"148","name":"Dragonair","img":"http://www.serebii.net/pokemongo/pokemon/148.png","type":["Dragon"],"height":"3.99 m","weight":"16.5 kg","candy":"Dratini Candy","candy_count":100,"egg":"Not in Eggs","spawn_chance":0.02,"avg_spawns":2,"spawn_time":"11:57","multipliers":[2.05],"weaknesses":["Ice","Dragon","Fairy"],"prev_evolution":[{"num":"147","name":"Dratini"}],"next_evolution":[{"num":"149","name":"Dragonite"}]},{"id":149,"num":"149","name":"Dragonite","img":"http://www.serebii.net/pokemongo/pokemon/149.png","type":["Dragon","Flying"],"height":"2.21 m","weight":"210.0 kg","candy":"Dratini Candy","egg":"Not in Eggs","spawn_chance":0.0011,"avg_spawns":0.11,"spawn_time":"23:38","multipliers":null,"weaknesses":["Ice","Rock","Dragon","Fairy"],"prev_evolution":[{"num":"147","name":"Dratini"},{"num":"148","name":"Dragonair"}]}]', () => {
    //   expect(window.pokemon.filterByType('Dragon')).toBe('[{"id":147,"num":"147","name":"Dratini","img":"http://www.serebii.net/pokemongo/pokemon/147.png","type":["Dragon"],"height":"1.80 m","weight":"3.3 kg","candy":"Dratini Candy","candy_count":25,"egg":"10 km","spawn_chance":0.3,"avg_spawns":30,"spawn_time":"06:41","multipliers":[1.83,1.84],"weaknesses":["Ice","Dragon","Fairy"],"next_evolution":[{"num":"148","name":"Dragonair"},{"num":"149","name":"Dragonite"}]},{"id":148,"num":"148","name":"Dragonair","img":"http://www.serebii.net/pokemongo/pokemon/148.png","type":["Dragon"],"height":"3.99 m","weight":"16.5 kg","candy":"Dratini Candy","candy_count":100,"egg":"Not in Eggs","spawn_chance":0.02,"avg_spawns":2,"spawn_time":"11:57","multipliers":[2.05],"weaknesses":["Ice","Dragon","Fairy"],"prev_evolution":[{"num":"147","name":"Dratini"}],"next_evolution":[{"num":"149","name":"Dragonite"}]},{"id":149,"num":"149","name":"Dragonite","img":"http://www.serebii.net/pokemongo/pokemon/149.png","type":["Dragon","Flying"],"height":"2.21 m","weight":"210.0 kg","candy":"Dratini Candy","egg":"Not in Eggs","spawn_chance":0.0011,"avg_spawns":0.11,"spawn_time":"23:38","multipliers":null,"weaknesses":["Ice","Rock","Dragon","Fairy"],"prev_evolution":[{"num":"147","name":"Dratini"},{"num":"148","name":"Dragonair"}]}]');
    // });

  });
// });
