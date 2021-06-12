import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Registro1Component } from './componentes/registro1/registro1.component';

const routes: Routes = [
  { path: '' , component:Registro1Component },
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
