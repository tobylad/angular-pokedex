import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { PokemonService } from '../pokemon.service';
import { IPokemon, IPokemonStat } from '../ipokemon.interface';
import { faChevronLeft, faChevronRight, faMedkit, faBolt, faMagic, faFighterJet, faCrosshairs, faLock, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { tap } from 'rxjs/operators';

@Component({
	selector: 'app-pokemon-view',
	templateUrl: './pokemon-view.component.html',
	styleUrls: ['./pokemon-view.component.css']
})
export class PokemonViewComponent implements OnInit {
	public pokemon$: Observable<IPokemon>;
	public faChevronLeft: IconDefinition = faChevronLeft;
	public faChevronRight: IconDefinition = faChevronRight;
	public faBolt: IconDefinition = faBolt;
	public faCrosshairs: IconDefinition = faCrosshairs;
	public faMagic: IconDefinition = faMagic;
	public faMedkit: IconDefinition = faMedkit;
	public faLock: IconDefinition = faLock;
	public faFighterJet: IconDefinition = faFighterJet;
	public currentSpriteUrl: string;
	public spriteUrls: string[];
	public spriteIndex: number = 0;
	public stats: IPokemonStat[];
	public infoTab: string = "abilities";
	public abilities: any[];
	public moves: any[];

	constructor(
		private pokemonService: PokemonService,
		private route: ActivatedRoute,
	) { }

	public ngOnInit(): void {
		const pokemonName = this.route.snapshot.paramMap.get("name");
		this.pokemon$ = this.pokemonService.getPokemonByName(pokemonName).pipe(
			tap((pokemon) => {
				this.setStats(pokemon)
				this.setImages(pokemon)
				this.setAbilities(pokemon)
				this.setMoves(pokemon)
			})
		);
	}

	public cycleImage(direction: string) {
		if (direction === "right" && this.spriteIndex < this.spriteUrls.length - 1) {
			this.spriteIndex++;
			this.currentSpriteUrl = this.spriteUrls[this.spriteIndex];
		} else if (direction === "left" && this.spriteIndex > 0) {
			this.spriteIndex--;
			this.currentSpriteUrl = this.spriteUrls[this.spriteIndex];
		}
	}

	public setInfoTab(tab: string): void {
		this.infoTab = tab;
	}

	private setStats(pokemon: IPokemon): void {
		this.stats = pokemon.stats.map((statProp) => {
			return {
				statName: statProp.stat.name,
				amount: statProp.base_stat
			}
		});
	}

	private setImages(pokemon: IPokemon): void {
		this.currentSpriteUrl = pokemon.sprites.front_default;
		this.spriteUrls = Object.values(pokemon.sprites).filter((sprite) => !!sprite);
	}

	private setAbilities(pokemon: IPokemon): void {
		this.abilities = pokemon.abilities.map((prop) => {
			return {
				abilityName: prop.ability.name
			}
		});
	}

	private setMoves(pokemon: IPokemon): void {
		this.moves = pokemon.moves.map((prop) => {
			return {
				moveName: prop.move.name
			}
		});
	}
}
