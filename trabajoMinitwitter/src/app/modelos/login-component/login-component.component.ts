
import { Component, OnInit } from '@angular/core';
import { LoginDto } from '../login.dto';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss']
})
export class LoginComponent implements OnInit {
  
  usuario: LoginDto;

  // Inyección de dependencias
  constructor(private authService: AuthService, public router :Router) { 
    this.usuario = new LoginDto('', '');
  }

  ngOnInit() {
  }

  doLogin() {
    // Llamar a un servicio que mande la petición de login
    // a la API.
    this.authService.login(this.usuario).subscribe(respuesta => {
        alert('API TOKEN ' + respuesta.token);
        localStorage.setItem('token', respuesta.token);
    });
  }

}