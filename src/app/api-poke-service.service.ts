import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { PokemonInfo, Pokeservice } from './pokemon';

const url = "https://pokeapi.co/api/v2/pokemon/"; 

@Injectable({
  providedIn: 'root'
})
export class ApiPokeServiceService {

  constructor(private httpClient : HttpClient) { }

  public getPokemon():Observable<Pokeservice>{

    return this.httpClient.get<Pokeservice>(url);
  }
  public getPokemonInfo(id:string):Observable<PokemonInfo>{
     return this.httpClient.get<PokemonInfo>(url+ id );
  }
}
