import { Component, OnInit } from '@angular/core';
import { PophandlerService } from 'src/app/servicios/pophandler.service';

@Component({
  selector: 'app-popfallo',
  templateUrl: './popfallo.component.html',
  styleUrls: ['./popfallo.component.sass']
})
export class PopfalloComponent implements OnInit {
  
  estado:[boolean,number] = [false,0];
  
  constructor( public _ph:PophandlerService ){
    this._ph.sujetopop$.subscribe(resp => this.estado = resp);
  }

  ngOnInit(): void {
  }

}
