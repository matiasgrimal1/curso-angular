import { Component, OnInit} from '@angular/core';

export interface Alumno {
 nombre: string;
 edad: number;
 calificacion: number; 
}


@Component({
  selector: 'app-listadoalumnos',
  templateUrl: './listadoalumnos.component.html',
  styleUrls: ['./listadoalumnos.component.css']
})



export class ListadoalumnosComponent implements OnInit {

  
  displayedColumns: string[] = ['nombre', 'edad', 'calificacion'];
  public datosTabla: Alumno[] = [
    {nombre: 'Juan', edad: 19, calificacion: 100},
    {nombre: 'Pedro', edad: 18, calificacion: 90},
    {nombre: 'Ana', edad: 19, calificacion: 70},
    {nombre: 'Juana', edad: 20, calificacion: 60},
  ]
   
  constructor(
    
  ) { }

  ngOnInit(): void {
  }
  
}
