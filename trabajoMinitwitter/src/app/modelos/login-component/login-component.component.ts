
import { Component, OnInit } from '@angular/core';
import { LoginDto } from '../login.dto';
import { AuthService } from '../../servicios/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss']
})
export class LoginComponent implements OnInit {
  
  usuario: LoginDto;

  // Inyección de dependencias
  constructor(private authService: AuthService) { 
    this.usuario = new LoginDto('', '');
  }

  ngOnInit() {
  }

  doLogin() {
    // Llamar a un servicio que mande la petición de login
    // a la API.
    this.authService.login(this.usuario).subscribe(respuesta => {
        alert('API TOKEN ' + respuesta.token);
    });
  }

}