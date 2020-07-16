import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PokemonService } from '../pokemon.service';
import { IPokemon } from '../ipokemon.interface';
import { createViewChild } from '@angular/compiler/src/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  public allPokemon: IPokemon[];
  public allPokemon$: Observable<IPokemon[]>;
  public name: string;
  public selectedId: number;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) {}

  public ngOnInit(): void {
    this.getPokemon();

    this.allPokemon$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = Number(params.get("id"));
        return this.pokemonService.getAllPokemon();
      })
    )

    this.route.queryParams.subscribe(params => {
      this.name = params['name'];
    });

    console.log("%cthis.name", "color: ; font-size: 16px;", this.name)
  }

  private getPokemon(): void {
    const pokemon = this.pokemonService.getAllPokemon();

    pokemon.subscribe((data: any) => {
      this.allPokemon = data.results;
      console.log(data);
    })

  }

}
