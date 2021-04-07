import PokemonApiController from "./Controllers/PokemonsApiController.js";
import ValuesController from "./Controllers/ValuesController.js";

class App {
  valuesController = new ValuesController();
  pokemonApiController = new PokemonApiController();
}

window["app"] = new App();
