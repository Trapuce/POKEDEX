import { Component, OnInit } from '@angular/core';
import { Pokemon, PokemonInfo } from '../pokemon';
import { ApiPokeServiceService } from '../api-poke-service.service';
import { FilterPokemonPipePipe } from '../filter-pokemon--pipe.pipe';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent implements OnInit {
pokemonDetail !:PokemonInfo;
  searchPokemon :string="";
  selectId!:string;
  pokemons :Pokemon[] = [];
  constructor(private pokemonService:ApiPokeServiceService){}
  ngOnInit(): void {
    this.pokemonService.getPokemon().subscribe((data)=>{
      data.results.forEach((e , index)=>{
           this.pokemons.push(new Pokemon(index+'' , e.name,e.url));
      })      
    })
  }
  go():void {
    if(this.selectId){
      this.pokemonService.getPokemonInfo(this.selectId).subscribe(data=> this.pokemonDetail = data);
    }
  }
}
