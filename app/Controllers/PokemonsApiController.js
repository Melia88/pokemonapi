import {ProxyState} from "../AppState.js"
import {pokemonApiService} from "../Services/PokemonsApiService.js"

function _drawAllPokemon(){
 let template = ''
 ProxyState.apiPokemon.forEach(p => {
   template += `<li class="cursor" onclick="app.pokemonApiController.getPokemon('${p.name}')">${p.name}</li>`
 })

  document.getElementById('api-pokemon').innerHTML = template
}
function _drawActive(){
  let activePokemon = ProxyState.activePokemon
  document.getElementById('active-pokemon').innerHTML = activePokemon.Template
}

export default class PokemonApiController {
  constructor(){
    console.log("hi from controller");
    ProxyState.on("apiPokemon",_drawAllPokemon)
    ProxyState.on("activePokemon", _drawActive)
    // This gets all the pokemon at the start of the app
    this.getAllPokemon()
  }

  async getAllPokemon(){
    try {
      await pokemonApiService.getAllPokemon()
    } catch (error) {
      console.error(error)
    }
  }

  async getPokemon(pokemonName){
    try {
      await pokemonApiService.getPokemon(pokemonName)
      console.log(pokemonName )
    } catch (error) {
      console.log(error)
    }
  }
}



