import { Component, OnInit } from '@angular/core';
import { Configuracion } from '../Modulos/Configuracion';

@Component({
  selector: 'app-conf',
  templateUrl: './conf.component.html',
  styleUrl: './conf.component.css'
})

export class ConfComponent implements OnInit {
  // Objeto donde guardaremos los datos introducidos en los inputs
  public confDatos:Configuracion;
  
  // Variable para recoger el número que introduce el usuario como posible respuesta
  public numUsuario:number=0;

  // Variables de los diferentes textos que mostramos en el template
  public msjAdivinar:string="";
  public msjAgotado:string="";
  public msjBienvenida:string="";
  public msjIntentosRest:string="";

  // Array de números para almacenar los numeros erroneos introducidos y luego poder recorrerlo y mostrar la lista
  public intentos: number[] = [];
  
  // Boleano para controlar que el botón de enviar se des/habilite
  public botonEnviarHabilitado:boolean=true;
  
  constructor() {
    this.confDatos= 
      new Configuracion ("", "", 0, 0, 0);
    }    

    ngOnInit ():void{
      console.log (this.confDatos);
    }

    recogerDatos():void {

      // Crear un número aleatorio del 0 al introducido en el rango por el usuario
      this.confDatos.miNumAleatorio = Math.floor(Math.random() * (this.confDatos.miRango));

      // Mostramos por consola el número aleatorio generado
      console.log("Número aleatorio generado: " + this.confDatos.miNumAleatorio);

      // Mostramos en el template los mensajes de bienvenida y de intentos restantes
      this.msjBienvenida = "Ongi etorri" + " " + this.confDatos.miNombre + " " + this.confDatos.miApellido;
      this.msjIntentosRest = "Intentos Restantes: " + this.confDatos.misIntentos;

      // Volvemos a habilitar el botón de enviar, por si queremos volver a jugar y volvemos a pusar el botón 'recoger datos'
      this.botonEnviarHabilitado = true;
      console.log (this.confDatos)
    }

    enviar():void {

      // Controlamos primero que el num introducido por el usuario no sea menor que cero, ni mayor que el rango introducido
      // Si no, mostramos un alert advirtiendo de que el num no está dentro del rango disponible
      if (this.numUsuario < 0 || this.numUsuario > this.confDatos.miRango) {
        alert('El número no está en el Rango.');
      } else {

        // Si el num introducido está dentro de rango y coincide con el num aleatorio, cambiamos texto de si has adivinado a Sí
        // Mostramos por consola que el juego ha terminado y deshabilitamos el botón enviar
        if (this.confDatos.miNumAleatorio === this.numUsuario) {
          this.msjAdivinar = '¿Has adivinado? SÍ';
          this.botonEnviarHabilitado = false;
          console.log ("Fin de juego");
        } else {

          // Si el num introducido está dentro de rango y no coincide con el num aleatorio, cambiamos texto de si has adivinado a No
          // Restamos 1 al contador de intentos y subimos el num erroneo al array de intentos
          this.msjIntentosRest = "Intentos Restantes: " + (--this.confDatos.misIntentos);
          this.msjAdivinar = '¿Has adivinado? NO';
          this.intentos.push(this.numUsuario);
        }

        // Cuando el num de intentos sea igual a 0, mostramos mensaje de que se han acabado intentos en el template
        // Mostramos por consola que el juego ha terminado y deshabilitamos el botón enviar
        if (this.confDatos.misIntentos === 0) {
          this.msjAgotado = '"Se han acabado los intentos"';
          this.botonEnviarHabilitado = false;
          console.log ("Fin de juego");
        }
      }
    }
}
