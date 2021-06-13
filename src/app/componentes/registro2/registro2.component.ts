import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PophandlerService } from 'src/app/servicios/pophandler.service';

@Component({
  selector: 'app-registro2',
  templateUrl: './registro2.component.html',
  styleUrls: ['./registro2.component.sass']
})
export class Registro2Component implements OnInit {

  form1 : FormGroup;
  
  constructor( private _fb:FormBuilder , private _r:Router, private _ph:PophandlerService ){
    this.form1 = this._fb.group({
      nc : ['',[Validators.required]],
      email : ['',[Validators.required]],
      pass : ['',[Validators.required]],
      tyc : [false,[Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  avanzar(){
    if (this.form1.valid){
      console.log("VALIDO",this.form1.value);
      this._r.navigate(['r3']);
    } else {
      console.log("INVALIDO",this.form1.value);
      this.form1.reset();
    }
  }

  fallo(){
    this._ph.sujetopop$.next([true,0]);
  }

}
