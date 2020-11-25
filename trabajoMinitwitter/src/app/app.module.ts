import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './modelos/login-component/login-component.component';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './modelos/registro/registro.component';
import { ListaTweetsComponent } from './modelos/lista-tweets/lista-tweets.component';//Importamos Routes


//Rutas para la navegacion
const appRoutes: Routes = [
  {path: /*'auth/login'*/'', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'tweets', component:ListaTweetsComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    ListaTweetsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
