import { Component, OnInit } from '@angular/core';
import { PokemonsService } from 'src/app/services/pokemons.service';
import { FormBuscarPersonaje } from 'src/app/models/form-buscar-personaje';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})

export class PokemonsComponent implements OnInit{

  pokemonSeleccionado = '';
  pokemons = [{'id': 0, 'nombre': '', 'imagen': '', 'categoria': '', 'tipo': '', 
               'talla': 0, 'peso': 0}];
 
  cuenta = 0;

  formBuscarPersonaje = new FormBuscarPersonaje("");
  
  constructor(private servicePokemons: PokemonsService) {}

  ngOnInit() {
    this.pokemons = this.servicePokemons.getPokemons();
    this.cuenta = this.servicePokemons.contarPokemons();
  }

  buscar(nombreDelPokemon: string) 
  {
    this.pokemons = this.servicePokemons.buscarPokemon(nombreDelPokemon);
  }

  cancelarBuscar() 
  {
    this.pokemons = this.servicePokemons.getPokemons();
    this.formBuscarPersonaje.setNombre('');
  }
}



