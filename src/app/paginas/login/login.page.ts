
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import {
  IonContent,
  IonIcon
} from '@ionic/angular';

import { addIcons } from 'ionicons';
import { logoApple } from 'ionicons/icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonIcon,
    RouterLink
  ]
})
export class LoginPage {

  pantalla: 'bienvenida' | 'iniciosesion' | 'registro' = 'bienvenida';

  constructor() {
    addIcons({ logoApple });
  }

  cambiarPantalla(
    nuevaPantalla: 'bienvenida' | 'iniciosesion' | 'registro'
  ) {
    this.pantalla = nuevaPantalla;
  }

}
