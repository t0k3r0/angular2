import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generaciones',
  templateUrl: './generaciones.component.html',
  styleUrls: ['./generaciones.component.css']
})

export class GeneracionesComponent implements OnInit{ 

  generaciones = ["Generación I",
                  "Generación II",
                  "Generación III",
                  "Generación IV",
                  "Generación V",
                  "Generación VI",
                  "Generación VII"];

  constructor() {}

  ngOnInit() {
  }
}



