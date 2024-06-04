import { Component, inject } from '@angular/core';
import { SearchBoxComponent } from '../../../shared/components/search-box/search-box.component';
import { Event } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { Observable } from 'rxjs';
import { Country } from '../../interfaces/country';
import { CountryTableComponent } from '../../components/country-table/country-table.component';

@Component({
    selector: 'app-by-country-page',
    standalone: true,
    templateUrl: './by-country-page.component.html',
    styles: ``,
    imports: [SearchBoxComponent, CountryTableComponent]
})
export class ByCountryPageComponent {

    countryService:CountryService = inject(CountryService);    
    countryListObserver:Observable<any> | undefined;
    countryList: Country[] | undefined = [];

    addItem(event: any){
        this.countryListObserver = this.countryService.searchCountry(event);
        this.countryListObserver.subscribe({
            next: value => {
                this.countryList = value;
                console.log(this.countryList);
            },
            error: err => console.error(err),
            complete: () => console.log("completo")
        });
    }

    ngOnInit(){
        this.countryListObserver = this.countryService.getAll();

        this.countryListObserver.subscribe({
            next: value => {
                this.countryList = value;
                console.log(this.countryList);
            },
            error: err => console.error(err),
            complete: () => console.log("completo")
        }
        )
    }
}
