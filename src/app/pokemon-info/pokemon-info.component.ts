import { Component, Input, OnInit } from '@angular/core';
import { PokemonInfo } from '../pokemon';

@Component({
  selector: 'app-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styleUrls: ['./pokemon-info.component.css']
})
export class PokemonInfoComponent implements OnInit {
  ngOnInit(): void {
   
  }
  @Input()
  pokemonDetail!:PokemonInfo;
}
