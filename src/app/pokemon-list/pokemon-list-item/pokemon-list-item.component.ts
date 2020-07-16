import { Component, OnInit, Input } from '@angular/core';
import { PokemonService } from 'src/app/pokemon.service';
import { Observable } from 'rxjs';
import { IPokemon } from 'src/app/ipokemon.interface';


@Component({
  selector: 'app-pokemon-list-item',
  templateUrl: './pokemon-list-item.component.html',
  styleUrls: ['./pokemon-list-item.component.css']
})
export class PokemonListItemComponent implements OnInit {
  @Input() pokemonName: string;

  public pokemon$: Observable<IPokemon>;

  constructor(
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
    this.pokemon$ = this.pokemonService.getPokemonByName(this.pokemonName);
  }

}
