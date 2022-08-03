import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactReactiveRoutingModule } from './contact-reactive-routing.module';
import { Menu2Component } from '../menu2/menu2/menu2.component';


@NgModule({
  declarations: [Menu2Component],
  imports: [
    CommonModule,
    ContactReactiveRoutingModule
  ]
})
export class ContactReactiveModule { }
