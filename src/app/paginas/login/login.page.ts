import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import {
  IonContent,
  IonIcon
} from '@ionic/angular';

import { addIcons } from 'ionicons';
import { logoApple, logoGoogle } from 'ionicons/icons';

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
  //Creamos una variable que solo va a poder adoptar un valor entre los tres posibles, la usamos en el html. El = '' indica su valor inicial
  pantalla: 'bienvenida' | 'iniciosesion' | 'registro' = 'bienvenida';

  constructor() {
    addIcons({ logoApple,logoGoogle });
  }

  //Funcion para cambiar la pantalla (la funcion cambia el valor en una nueva variable y luego pasa su valor a la variable del ts)
  cambiarPantalla(
    nuevaPantalla: 'bienvenida' | 'iniciosesion' | 'registro'
  ) {
    this.pantalla = nuevaPantalla;
  }

}
