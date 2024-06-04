import { Routes } from "@angular/router";
import { ByCapitalPageComponent } from "./pages/by-capital-page/by-capital-page.component";
import { ByCountryPageComponent } from "./pages/by-country-page/by-country-page.component";
import { ByRegionPageComponent } from "./pages/by-region-page/by-region-page.component";
import { CountryPageComponent } from "./pages/country-page/country-page.component";

export const countryRoutes: Routes = [
    {
        path:'byCapitalPage',
        component: ByCapitalPageComponent
    },
    {
        path:'byCountryPage',
        component: ByCountryPageComponent
    },
    {
        path:'byRegionPage',
        component: ByRegionPageComponent
    },
    {
        path:'countryPage/:id',
        component: CountryPageComponent
    }
]