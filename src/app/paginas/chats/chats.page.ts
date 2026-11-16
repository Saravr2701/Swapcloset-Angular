import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IonContent, IonHeader, IonToolbar} from '@ionic/angular';
import { TarjetaschatsComponent } from '../../componentes/tarjetaschats/tarjetaschats.component';
import { CHATS } from '../../datos/mensajeschats';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.page.html',
  styleUrls: ['./chats.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, TarjetaschatsComponent, IonHeader, IonToolbar]
})

//Clase exportable a otros archivos con la lista creada en el ts
export class ChatsPage {
  chats = CHATS;
}

