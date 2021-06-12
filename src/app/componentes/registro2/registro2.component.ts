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
      nc : ['',[Validators.required,Validators.minLength(2)]],
      email : ['',[Validators.required,Validators.minLength(2)]],
      pass : ['',[Validators.required,Validators.minLength(2)]],
      tyc : [false,[Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  avanzar(){
    this.form1.valid ? console.log("VALIDO",this.form1.value) : console.log("INVALIDO",this.form1.value) ; this.form1.reset();
  }

}
