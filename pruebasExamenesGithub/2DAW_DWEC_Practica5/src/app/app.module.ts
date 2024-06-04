import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PokemonsComponent } from './components/pokemons/pokemons.component';

import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { PokemonComponent } from './components/pokemon/pokemon.component';

registerLocaleData(es);

@NgModule({
  declarations: [
    AppComponent,
    PokemonsComponent,
    PokemonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'es'}],
  bootstrap: [AppComponent]
})

export class AppModule { }

