import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {IonContent, IonToolbar, IonIcon, IonFooter} from '@ionic/angular';
import { CHATS, Chat } from '../../datos/mensajeschats';
import { addIcons } from 'ionicons';
import {happyOutline, attachOutline, cameraOutline, micOutline, sendOutline} from 'ionicons/icons';

@Component({
  selector: 'app-conversacion',
  templateUrl: './conversacion.page.html',
  styleUrls: ['./conversacion.page.scss'],
  standalone: true,
  imports: [IonContent, IonIcon, IonToolbar, IonFooter]
})

export class ConversacionPage implements OnInit {

  conversacion: Chat[] = [];

  constructor(private route: ActivatedRoute, private router: Router) {
    addIcons({happyOutline, attachOutline, cameraOutline, micOutline, sendOutline});
  }

  ngOnInit() {

    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.conversacion = CHATS.filter(
      chat => chat.id === id
    );

  }

  abrirPerfil(nombre?: string) {
    if (!nombre) return;

    this.router.navigate(['/tabs/perfilusuarios', nombre]);
  }
}
