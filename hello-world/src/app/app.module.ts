import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GeneradoCliComponent } from './prueba-componentes/generado-cli/generado-cli.component';


@NgModule({
  declarations: [
    AppComponent,
    GeneradoCliComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
