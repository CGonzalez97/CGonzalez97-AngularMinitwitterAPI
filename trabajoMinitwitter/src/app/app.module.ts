import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponentComponent } from './modelos/login-component/login-component.component';
import { RouterModule, Routes } from '@angular/router';//Importamos Routes


//Rutas para la navegacion
const appRoutes: Routes = [
  {path: 'auth/login', component: LoginComponentComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
