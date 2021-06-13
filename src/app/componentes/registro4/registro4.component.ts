import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro4',
  templateUrl: './registro4.component.html',
  styleUrls: ['./registro4.component.sass']
})
export class Registro4Component implements OnInit {

  form3 : FormGroup;
  
  constructor( private _fb:FormBuilder ){
    this.form3 = this._fb.group({
      tarjeta : ['',[Validators.required]],
      ns : ['',Validators.required]
    })
  }

  ngOnInit(): void {
  }

  avanzar(){
    console.log(this.form3);
  }

  cccheck(tipo:string){
    let caso:boolean = false;
    switch(tipo){
      case 'tarjeta' :
        if(this.form3.value.tarjeta.length == 16) {caso = true} else {caso = false} ; break ;
      case 'ns' :
        if(this.form3.value.ns.length == 3) {caso = true} else {caso = false} ; break ;
    }
    return caso;
  }

}
