// Angular
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

// Packages
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgHttpLoaderModule } from 'ng-http-loader';

// Components
import { AppComponent } from './app.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonListItemComponent } from './pokemon-list/pokemon-list-item/pokemon-list-item.component';
import { PokemonViewComponent } from './pokemon-view/pokemon-view.component';
import { StarRatingComponent } from './pokemon-list/star-rating/star-rating.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonViewComponent,
    PokemonListComponent,
    PokemonListItemComponent,
    StarRatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgHttpLoaderModule.forRoot(),
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
