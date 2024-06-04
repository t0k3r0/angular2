import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { Observable, switchMap } from 'rxjs';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-country-page',
  standalone: true,
  imports: [],
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent {
  countryService:CountryService = inject(CountryService);    
  countryObserver:Observable<any> | undefined;
  country: Country | undefined;

  constructor(private activatedRoute: ActivatedRoute, private router: Router){}
  ngOnInit(): void {
    
    this.activatedRoute.params
    .pipe(
    switchMap( ({ id }) => this.countryService.searchCountryByAlphaCode( id )),
      )
        .subscribe( country => {
          if ( !country ) return this.router.navigateByUrl('');
          return this.country = country;
        });
  }
}
