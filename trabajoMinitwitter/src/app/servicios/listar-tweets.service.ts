import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { RespuestaTweets } from '../interfaces/respuestaAllTweets';
import { Tweet } from '../interfaces/tweet';
import { Observable } from 'rxjs';

let token = localStorage.getItem('token');
const authURL = 'https://www.minitwitter.com:3001/apiv1/tweets/all';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Bearer ' + token
  })
};

@Injectable({
  providedIn: 'root'
})
export class ListarTweetsService {

  constructor(private http: HttpClient) {   }

  getTweets(): Observable<Tweet[] > {
    return this.http.get<Tweet[] >(//Cambiar RespuestaTweets por Tweet[] 
       authURL,
       httpOptions
    );
  }


}
