import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GeneradoCliComponent } from './prueba-componentes/generado-cli/generado-cli.component';
import { MiDirectivaDirective } from './directivas/mi-directiva.directive';


@NgModule({
  declarations: [
    AppComponent,
    GeneradoCliComponent,
    MiDirectivaDirective,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
