import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PophandlerService {

  sujetopop$ = new Subject<[boolean,number]>();
  
  constructor(){}

  

}
