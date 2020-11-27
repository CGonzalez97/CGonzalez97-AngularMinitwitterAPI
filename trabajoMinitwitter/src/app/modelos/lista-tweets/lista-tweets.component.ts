import { Component, OnInit } from '@angular/core';
import { ListarTweetsService } from '../../servicios/listar-tweets.service';
import {Tweet} from '../../interfaces/tweet';
import { RespuestaTweets } from 'src/app/interfaces/respuestaAllTweets';
import {FavServicioService} from '../../servicios/fav-servicio.service';

@Component({
  selector: 'app-lista-tweets',
  templateUrl: './lista-tweets.component.html',
  styleUrls: ['./lista-tweets.component.scss']
})
export class ListaTweetsComponent implements OnInit {

  listadoTweets:Tweet[];
  tweetLiked:Tweet;

  constructor(private listaTweetsService: ListarTweetsService, private favService:FavServicioService) { }

  ngOnInit(): void {
    this.cargarTweets();
  }

  cargarTweets(){
    this.listaTweetsService.getTweets().subscribe(resp => {
      this.listadoTweets = resp;
    });
  }

  darLike(idTweet:number){
    this.favService.postFav(idTweet).subscribe(resp => {
      this.tweetLiked = resp;
      this.cargarTweets();
    });
  }

}
