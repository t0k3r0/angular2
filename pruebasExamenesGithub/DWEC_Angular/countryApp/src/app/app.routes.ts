import { Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { ContactPageComponent } from './shared/pages/contact-page/contact-page.component';

export const routes: Routes = [
    {
        path: 'country',
        loadChildren: () => import('./countries/country.routes').then(m => m.countryRoutes)
    },
    {
        path:'home',
        component: HomePageComponent
    },
    {
        path:'about',
        component: AboutPageComponent
    },
    {
        path:'contact',
        component: ContactPageComponent
    },
    { 
        path: '',
        redirectTo: 'home',
        pathMatch: 'full' 
    },
];
