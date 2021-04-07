import { pokemonApi } from "../Services/AxiosService.js"

export default class Pokemon{
  constructor({pokemon,name, weight, height, types, img, sprites}){
    this.pokemon = pokemon
    this.name = name
    this.weight = weight
    this.height = height
    this.types = types
    this.img = img || sprites.other.dream_world.front_default
  }

  get Template(){
    return /*html*/`
    
       <div class="card">
      
        <img class="img-fluid" src="${this.img}" alt=""/>
          <h1>${this.name}</h1>
          <h3>${this.weight} | ${this.height}</h3>
          <h4>${this.types}</h4>
          <button class="btn btn-success" onclick="app.PokemonApiController.catchPokemon(${this.pokemon})">Catch Pokemon</button>
        </div>
     
    `
  }
}

// "name": {
//   "type": "String",
//   "required": true
// },
// "img": {
//   "type": "String",
//   "required": true
// },
// "weight": {
//   "type": "String"
// },
// "height": {
//   "type": "String"
// },
// "types"