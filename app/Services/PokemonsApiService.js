import {ProxyState} from "../AppState.js"
import Pokemon from "../Models/Pokemon.js"
import {pokemonApi} from "./AxiosService.js"

class PokemonApiService {
 async getAllPokemon() {
    let response = await pokemonApi.get()
    ProxyState.apiPokemon = response.data.results
    console.log(ProxyState.apiPokemon)
  }
 async getPokemon(pokemonName) {
    let response = await pokemonApi.get(pokemonName)
    // console.log("from service",response.data);
    ProxyState.activePokemon = new Pokemon(response.data)
  }
  constructor(){
    console.log('hi from service');
  }

}

export const pokemonApiService = new PokemonApiService();