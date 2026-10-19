import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IonContent, IonHeader, IonToolbar} from '@ionic/angular';
import { TarjetaschatsPage } from '../../componentes/tarjetaschats/tarjetaschats.page';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.page.html',
  styleUrls: ['./chats.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, TarjetaschatsPage, IonHeader, IonToolbar]
})
export class ChatsPage {

  chats = [
    {
      id: 1,
      nombre: 'Jose Ignacio N.',
      ultimoMensaje: 'Bizum de 1000€ o no apruebas la asignatura',
      imagen: './assets/pendientestous.png',
      sinLeer: true
    },
    {
      id: 2,
      nombre: 'Manuel R.',
      ultimoMensaje: 'Okey, a las 5 estoy allí',
      imagen: './assets/pendientestous.png',
      sinLeer: false
    },
    {
      id: 3,
      nombre: 'Sofia L.',
      ultimoMensaje: 'De nada, encantada!',
      imagen: './assets/pendientestous.png',
      sinLeer: false
    }
  ];

}

