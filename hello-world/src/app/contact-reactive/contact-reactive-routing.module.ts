import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Menu2Component } from '../menu2/menu2/menu2.component';

const routes: Routes = [
  { path: '', component: Menu2Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactReactiveRoutingModule { }
