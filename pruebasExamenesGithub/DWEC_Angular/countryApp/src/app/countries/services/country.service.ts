
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


import {  Observable, catchError, map, of } from 'rxjs';
import { Country } from '../interfaces/country';
  
// Importar aquí las interfaces necesarias
  
@Injectable({
  providedIn: 'root'
})
export class CountryService {
  
  private apiURL =  "https://restcountries.com/v3.1";
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
   
 // Constructor

  constructor(private httpClient: HttpClient) { }
    
  // Metodos
    
 // GET
	getAll(): Observable<any> {  
    return this.httpClient.get(this.apiURL + '/all/');
  } // usar adecuadamente las interfaces
    
  searchCapital(term: string): Observable<Country[]> {
    const url = `${this.apiURL}/capital/${term}`;
    return this.httpClient.get<Country[]>(url)
    .pipe(
      catchError(error => of([])) // Si hay un error se vacía el array de resultados
    );
  }

  searchCountry(term: string): Observable<Country[]> {
    const url = `${this.apiURL}/name/${term}`;
    return this.httpClient.get<Country[]>(url)
    .pipe(
      catchError(error => of([])) // Si hay un error se vacía el array de resultados
    );
  }

  searchRegion(term: string): Observable<Country[]> {
    const url = `${this.apiURL}/region/${term}`;
    return this.httpClient.get<Country[]>(url)
    .pipe(
      catchError(error => of([])) // Si hay un error se vacía el array de resultados
    );
  }

  searchCountryByAlphaCode( code: string ): Observable<Country | null> {

    const url = `${ this.apiURL }/alpha/${ code }`;
  
      return this.httpClient.get<Country[]>( url )
        .pipe(
          map( countries => countries.length > 0 ? countries[0]: null ),
          catchError( () => of(null) ) 
        );
    }
// // CREATE
    
//   create(post:Post): Observable<any> {
  
//     return this.httpClient.post(this.apiURL + '/posts/', JSON.stringify(post), this.httpOptions)
//   }  
    
// // BUSCAR
    
//   find(id:number): Observable<any> {
  
//     return this.httpClient.get(this.apiURL + '/posts/' + id)
//   }
    
// // ACTUALIZAR
    
//   update(id:number, post:Post): Observable<any> {
//     return this.httpClient.put(this.apiURL + '/posts/' + id, JSON.stringify(post), this.httpOptions)

//   }
       
// // BORRAR
//   delete(id:number){
//     return this.httpClient.delete(this.apiURL + '/posts/' + id, this.httpOptions)
//   }
      
}