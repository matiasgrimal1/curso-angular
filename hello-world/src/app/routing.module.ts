import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { MiGuardaGuard } from './guardas/mi-guarda.guard';
import { Menu2Component } from './menu2/menu2/menu2.component';

const rutas: Routes = [
  {
    path: 'menu2',
    loadChildren: () => import('./contact-reactive/contact-reactive.module').then(m => m.ContactReactiveModule),
    canActivate: [MiGuardaGuard]
  },
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
