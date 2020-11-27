import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tweet } from '../interfaces/tweet';

let token = localStorage.getItem('token');
const authURL = 'https://www.minitwitter.com:3001/apiv1/tweets/all';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Bearer ' + token
  })
};
const params = new HttpParams();

@Injectable({
  providedIn: 'root'
})
export class FavServicioService {

  constructor(private http: HttpClient) { }

  postFav(idTweet:number): Observable<Tweet> {
    params.set('idTweet', idTweet.toString());
    return this.http.post<Tweet>(//Cambiar RespuestaTweets por Tweet[] 
       authURL+{params},
       httpOptions
    );
  }

  
}
