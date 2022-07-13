import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMiPropiaDirectiva]'
})
export class MiPropiaDirective {

  constructor(
    private elemento: ElementRef,
    private renderer:Renderer2
  ) { 
    renderer.setStyle(elemento.nativeElement, 'color', 'white');
    renderer.setStyle(elemento.nativeElement, 'background-color', 'black');
  }

}
