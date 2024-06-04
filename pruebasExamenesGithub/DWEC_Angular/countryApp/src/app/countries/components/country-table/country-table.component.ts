import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-country-table',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './country-table.component.html',
  styles: ``
})
export class CountryTableComponent {
  @Input() countries: Country[] | undefined = [];
  
}
