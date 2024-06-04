import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- Añade esta línea
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MyComponent } from './my-component/my-component.component';
import { CardComponent } from './card/card.component';
import { HomeComponent } from './home/home.component';
import { JsonDataComponent } from './json-data/json-data.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponent,
    CardComponent,
    HomeComponent,
    JsonDataComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, // <-- Añade esta línea
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
