import { StringMap } from '@angular/compiler/src/compiler_facade_interface';

export interface RespuestaTweets{
    lista:[
        {
            id:number;
            mensaje:string;
            likes:[
                {
                    id:number;
                    username:string;
                    descripcion:string;
                    website:string;
                    photoUrl:string;
                    created:Date;
                }
            ];
            user:{
                id:number;
                username:string;
                descripcion:string;
                website:string;
                photoUrl:string;
                created:Date;
            }

        }
    ]
}

/*
[
  {
    "id": 3122,
    "mensaje": "hola",
    "likes": [
      {
        "id": 629,
        "username": "profesor",
        "descripcion": "",
        "website": "",
        "photoUrl": "",
        "created": "2019-10-28T07:20:54.000Z"
      }
    ],
    "user": {
      "id": 1880,
      "username": "maurogt",
      "descripcion": "",
      "website": "",
      "photoUrl": "",
      "created": "2020-11-23T03:06:22.000Z"
    }
  },
  */