import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { PokemonService } from '../pokemon.service';
import { IPokemon } from '../ipokemon.interface';

@Component({
  selector: 'app-pokemon-view',
  templateUrl: './pokemon-view.component.html',
  styleUrls: ['./pokemon-view.component.css']
})
export class PokemonViewComponent implements OnInit {
  public pokemon$: Observable<IPokemon>;

  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute,
  ) { }

  public ngOnInit(): void {
    const pokemonName = this.route.snapshot.paramMap.get("name");
    this.pokemon$ = this.pokemonService.getPokemonByName(pokemonName);
  }
}
