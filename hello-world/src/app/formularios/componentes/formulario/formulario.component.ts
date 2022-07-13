import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  public formulario: FormGroup;
  

  constructor(
    private fb: FormBuilder
  ) { 
    this.formulario = fb.group({
      nombre: [null, [Validators.required]],
      edad: [null, [Validators.required, Validators.min(1)]],
      email: [null, [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {
  }

  submit(valorFormulario: any) {
  }

}
