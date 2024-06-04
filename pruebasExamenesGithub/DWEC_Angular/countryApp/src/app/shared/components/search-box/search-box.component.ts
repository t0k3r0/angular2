import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-box',
  standalone: true,
  imports: [],
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent {
  @Output() newItemEvent = new EventEmitter<string>();




  addNewItem(textoBusqueda: string) {
    this.newItemEvent.emit(textoBusqueda);
  }
}
