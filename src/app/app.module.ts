import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Registro1Component } from './componentes/registro1/registro1.component';
import { Registro2Component } from './componentes/registro2/registro2.component';
import { Registro3Component } from './componentes/registro3/registro3.component';

@NgModule({
  declarations: [
    AppComponent,
    Registro1Component,
    Registro2Component,
    Registro3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
