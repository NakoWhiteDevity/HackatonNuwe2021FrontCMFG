import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PophandlerService } from 'src/app/servicios/pophandler.service';

@Component({
  selector: 'app-popfallo',
  templateUrl: './popfallo.component.html',
  styleUrls: ['./popfallo.component.sass']
})
export class PopfalloComponent implements OnInit {
  
  estado:[boolean,number] = [false,0];
  
  constructor( public _ph:PophandlerService , private _r:Router ){
    this._ph.sujetopop$.subscribe(resp => {
      this.estado = resp;
    });
  }

  ngOnInit(): void {
  }

  cerrado(){
    this._ph.sujetopop$.next([false,0]);
  }

  paranuwe(){
    window.location.href="https://nuwe.io"
  }

}
