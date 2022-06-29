import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-generado-cli',
  templateUrl: './generado-cli.component.html',
  styleUrls: ['./generado-cli.component.css']
})
export class GeneradoCliComponent implements OnInit, OnDestroy {

  alumno= {
    nombre: 'Juan',
  };
  color: string = 'red';
  alumno2 = [
    'Pedro', 'Juana', 'Lisa'
  ]
  colorgreen: string ='green';

  alumno3 =[
    'Carla', 'Carlos', 'José'
  ]
  colorblack: string = 'black;'

  constructor() { }

  ngOnDestroy(): void {
    
  }

  ngOnInit(): void {
  }

}
