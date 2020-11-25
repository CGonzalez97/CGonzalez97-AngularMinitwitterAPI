import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { RespuestaTweets } from '../interfaces/respuestaAllTweets';
import { Observable } from 'rxjs';

const authURL = 'https://www.minitwitter.com:3001/apiv1/tweets/all';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem('token')//token
  })
};

@Injectable({
  providedIn: 'root'
})
export class ListarTweetsService {

  constructor(private http: HttpClient) {   }

  getTweets(): Observable<RespuestaTweets> {
    return this.http.get<RespuestaTweets>(
       authURL,
       httpOptions
    );
  }


}
