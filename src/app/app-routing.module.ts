import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokemonViewComponent } from './pokemon-view/pokemon-view.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';


const routes: Routes = [
  { path: "pokemon-view/:name", component: PokemonViewComponent },
  { path: "", component: PokemonListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
