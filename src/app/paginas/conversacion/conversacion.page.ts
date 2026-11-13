import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton} from '@ionic/angular';
import { CHATS, Chat } from '../../datos/mensajeschats';

@Component({
  selector: 'app-conversacion',
  templateUrl: './conversacion.page.html',
  styleUrls: ['./conversacion.page.scss'],
  standalone: true,
  imports: [
    IonContent,
  ]
})
export class ConversacionPage implements OnInit {

  conversacion: Chat[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {

    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.conversacion = CHATS.filter(
      chat => chat.id === id
    );

  }
}
