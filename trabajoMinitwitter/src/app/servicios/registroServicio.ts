  
import { Injectable } from '@angular/core';
import { RegistroDto } from '../modelos/registro.dto';
import { RespuestaRegistro } from '../interfaces/respuestaRegistro';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const LOGIN_URL = 'https://www.minitwitter.com:3001/apiv1/auth/signup';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class RegistroServicio {

  constructor(private http: HttpClient) { }


  registrar(registroDto: RegistroDto): Observable<RespuestaRegistro> {
    alert('Entra al método login del servicio');
    return this.http.post<RespuestaRegistro>(
      LOGIN_URL,
      registroDto,
      httpOptions
    );
  }

  

}