import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaisAPIService } from 'src/app/servicios/pais-api.service';

@Component({
  selector: 'app-registro3',
  templateUrl: './registro3.component.html',
  styleUrls: ['./registro3.component.sass']
})
export class Registro3Component implements OnInit {

  constructor( private _fb:FormBuilder , private _pas:PaisAPIService ){
    this.form2 = this._fb.group({
      tel : ['',[Validators.required]],
      dir : ['',[Validators.required]],
      con : ['',[Validators.required]]
    })
  }

  form2 : FormGroup;

  ngOnInit(): void {
  }

  avanzar(){
    console.log(this.form2);
  }

}
