import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Menu2Component } from './menu2/menu2/menu2.component';


const rutas: Routes = [
  { path: 'menu2', component: Menu2Component }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(rutas)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
