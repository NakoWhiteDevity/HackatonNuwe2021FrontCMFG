import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopfalloComponent } from './componentes/popfallo/popfallo.component';
import { Registro1Component } from './componentes/registro1/registro1.component';
import { Registro2Component } from './componentes/registro2/registro2.component';
import { Registro3Component } from './componentes/registro3/registro3.component';
import { Registro4Component } from './componentes/registro4/registro4.component';

const routes: Routes = [
  { path: '' , component:Registro1Component },
  { path: 'r2' , component:Registro2Component },
  { path: 'r3' ,component:Registro3Component },
  { path: 'r4' ,component:Registro4Component },
  { path: 'pf' ,component:PopfalloComponent },
  { path: '', pathMatch: 'full', redirectTo : 'inicio' },
  { path: '**', pathMatch: 'full', redirectTo : 'inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

/*
const APP_ROUTING: Routes = [
  { path:'inicio',component:ForinicioComponent },
  { path:'sillas',component:RepartesillasComponent },
  { path:'letrero',component:LetreroComponent },
  { path:'tabla',component:FormahjongComponent },
  { path:'findejuego',component:FindejuegoComponent },
  { path: '', pathMatch: 'full', redirectTo : 'inicio' },
  { path: '**', pathMatch: 'full', redirectTo : 'inicio' }
];
*/
