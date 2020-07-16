import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { IPokemon } from '../ipokemon.interface';

@Component({
	selector: 'app-pokemon-list',
	templateUrl: './pokemon-list.component.html',
	styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
	public allPokemon: IPokemon[];

	constructor(
		private pokemonService: PokemonService
	) {}

	public ngOnInit(): void {
		this.getPokemon();
	}

	private getPokemon(): void {
		const pokemon = this.pokemonService.getAllPokemon();

		pokemon.subscribe((data) => {
			this.allPokemon = data.results;
		})
	}
	
}
