import { Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map , tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { paisIface , mifacepaises } from '../interfaces/interfazpais';

@Injectable({
  providedIn: 'root'
})
export class PaisAPIService {

  //https://app.quicktype.io/ y Postman
  
  API='https://restcountries.eu/rest/v2/all';
  paises!:mifacepaises[];

  constructor(){
    this.obspaise$.subscribe(resp => this.paises = resp);
  }

  obspaise$ = ajax.getJSON<paisIface[]>(this.API).pipe(
    map<paisIface[],mifacepaises[]>(resp => this.trans(resp) ),
    tap(console.log)
  );

  trans(paises:paisIface[]):mifacepaises[]{
    let caso:mifacepaises[] = [];
    paises.forEach( pais => {
      caso.push({
        nombre : pais.name,
        prefijo : `+${pais.callingCodes[0]}`,
        bandera : pais.flag
      })
    });
    return caso;
  }

}
