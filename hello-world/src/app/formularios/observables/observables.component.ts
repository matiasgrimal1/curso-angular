import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit(): void {
  }
  valorPromesa = new Promise((resolve) => {

    setTimeout(() => {
      resolve('Formulario Cargado Exitosamente');
    }, 4500);

  })

}
