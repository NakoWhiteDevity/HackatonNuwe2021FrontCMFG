import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro2',
  templateUrl: './registro2.component.html',
  styleUrls: ['./registro2.component.sass']
})
export class Registro2Component implements OnInit {

  form1 : FormGroup;
  
  constructor( private _fb:FormBuilder ){
    this.form1 = this._fb.group({
      NombreCompleto : ['',[Validators.required]],
      CorreoElectronico : ['',[Validators.required,Validators.email]],
      Contrasenia : ['',[Validators.required]],
    })
  }

  ngOnInit(): void {
  }

  avanzar(){}

}
