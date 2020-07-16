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
	const pokemon = this.http.get("https://pokeapi.co/api/v2/pokemon");
	return pokemon;
  }

  public getPokemonByName(name: string): Observable<IPokemon> {
	const pokemon = this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`) as Observable<IPokemon>;
	return pokemon;
  }
}
