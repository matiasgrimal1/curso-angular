import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MiDirectivaDirective } from './directivas/mi-directiva.directive';
import { FormularioComponent } from './formularios/componentes/formulario/formulario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modulos/material/material.module';
import { ConversorPipe } from './formularios/pipes/conversor.pipe';
import { ListadoalumnosComponent } from './formularios/listadoalumnos/listadoalumnos.component';
import { ObservablesComponent } from './formularios/observables/observables.component';
import { RoutingModule } from './routing.module';
import { AlumnosComponent } from './desaprobados/alumnos/alumnos.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MiDirectivaDirective,
    FormularioComponent,
    ConversorPipe,
    ListadoalumnosComponent,
    ObservablesComponent,
    AlumnosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    RoutingModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
