import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import {IonContent, IonHeader, IonToolbar, IonButton, IonToggle, ToggleCustomEvent, IonIcon, IonItem, IonList, IonLabel} from '@ionic/angular';

import { addIcons } from 'ionicons';
import { moonOutline, imagesOutline, informationCircleOutline, notificationsOutline } from 'ionicons/icons';

@Component({
  selector: 'app-ajustes',
  templateUrl: './ajustes.page.html',
  styleUrls: ['./ajustes.page.scss'],
  standalone: true,
  imports: [CommonModule, RouterLink, IonContent, IonHeader, IonToolbar, IonButton, IonToggle, IonIcon, IonItem, IonList, IonLabel]})
export class AjustesPage {

  oscuro = document.documentElement.classList.contains('ion-palette-dark');

  constructor() {
    addIcons({ moonOutline, informationCircleOutline, imagesOutline, notificationsOutline });
  }

  cambiarTema(evento: ToggleCustomEvent) {
    this.oscuro = evento.detail.checked;
    document.documentElement.classList.toggle(
      'ion-palette-dark',
      this.oscuro
    );
    localStorage.setItem('modoOscuro', String(this.oscuro));
  }
}
