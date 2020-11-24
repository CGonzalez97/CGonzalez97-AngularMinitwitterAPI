import { Component, OnInit } from '@angular/core';
import { RegistroDto } from '../registro.dto';
import { RegistroServicio } from '../../servicios/registroServicio';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  usuario:RegistroDto;

  constructor(private registroServicio:RegistroServicio) { 
    this.usuario = new RegistroDto('', '','','');
  }

  ngOnInit(): void {
  }

  registrarUsuario(){
    this.registroServicio.registrar(this.usuario).subscribe(respuesta => alert('Resultada: '+respuesta))
  }

}
