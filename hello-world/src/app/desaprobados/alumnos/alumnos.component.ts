import { Component, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { MockapiService } from '../../servicios/mockapi.service';
import { alumnosdesaprobados } from '../../alumnosdesaprobados/alumnosdesaprobados';
import { Alumno } from 'src/app/formularios/listadoalumnos/listadoalumnos.component';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  public alumnos: Alumno[]
  alumnosdesaprobados: alumnosdesaprobados[];

  constructor(
    private mockapiservice: MockapiService
  ) { }

  ngOnInit(): void {

  }

  cargarAlumnos() {
    this.mockapiservice.getAlumnos().subscribe(alumnos => {
      this.alumnosdesaprobados = alumnos
    });

  }

}
