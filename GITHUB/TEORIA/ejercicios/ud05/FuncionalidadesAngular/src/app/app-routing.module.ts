import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JsonDataComponent } from './json-data/json-data.component';
import { MyComponent } from './my-component/my-component.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'json-data', component: JsonDataComponent },
  { path: 'my-component', component: MyComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Ruta por defecto
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
