import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MiDirectivaDirective } from './directivas/mi-directiva.directive';
import { FormularioComponent } from './formularios/componentes/formulario/formulario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modulos/material/material.module';
import { ConversorPipe } from './formularios/pipes/conversor.pipe';
import { MiPropiaDirective } from './formularios/directivas/mi-propia.directive';
import { ListadoalumnosComponent } from './formularios/listadoalumnos/listadoalumnos.component';
import { ObservablesComponent } from './formularios/observables/observables.component';
import { Menu2Component } from './menu2/menu2/menu2.component';
import { RoutingModule } from './routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MiDirectivaDirective,
    FormularioComponent,
    ConversorPipe,
    MiPropiaDirective,
    ListadoalumnosComponent,
    ObservablesComponent,
    Menu2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
