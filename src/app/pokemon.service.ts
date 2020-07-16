import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPokemon } from './ipokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  public data;

  constructor(private http: HttpClient) { }

  // https://pokeapi.co/api/v2/

  public getAllPokemon(): Observable<any> {
    const pokemon = this.http.get("https://pokeapi.co/api/v2/pokemon?offset=20&limit=20")
    return pokemon;
  }

  public getPokemonByName(name: string) {
    const pokemon = this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    return pokemon;
  }
}
