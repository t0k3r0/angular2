import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Importa HttpClient
import { Observable } from 'rxjs'; // Importa Observable
interface User {
  id: number;
  name: string;
  // Añade otras propiedades necesarias
}
@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styles: '',
})
export class MyComponent {
  inputText: string = '';
  paragraphContent: string = '';
  username: any;
  fruits = ['Apple', 'Banana', 'Cherry'];
  isLoggedIn = false;
  isHighlighted = true;
  textColor = 'blue';
  fontSize = 16;
  day = 'aaa';
  name = 'joseba';
  isAdmin = true;
  user$: Observable<User>; // Define el tipo de user$
  constructor(private http: HttpClient) {
    this.user$ = this.http.get<User>('api/user'); // Inicializa user$
  }
  login() {
    this.isLoggedIn = true;
  }

  updateParagraph() {
    this.paragraphContent = this.inputText;
  }
  obtenerNombreAleatorio() {
    this.http.get('https://randomuser.me/api/').subscribe((data: any) => {
      const nombre = data.results[0].name.first;
      const apellido = data.results[0].name.last;

      // Actualiza las variables con los datos recibidos
      this.paragraphContent = `Nombre: ${nombre}, Apellido: ${apellido}`;
    });
  }
}
