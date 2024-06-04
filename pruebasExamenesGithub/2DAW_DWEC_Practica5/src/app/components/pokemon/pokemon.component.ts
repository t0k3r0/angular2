import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})

export class PokemonComponent 
{
  @Input() pokemon = {imagen: '', nombre:'', categoria:'', tipo:'', talla:0, peso:0};

  @Output() eventoClicImagen = new EventEmitter();

  clickEnImagen() 
  { 
    this.eventoClicImagen.emit(this.pokemon.nombre); 
  }
}
