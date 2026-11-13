import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonContent, IonHeader, IonIcon, IonToolbar} from '@ionic/angular';
import { imageOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-anadirprendas',
  templateUrl: './anadirprendas.page.html',
  styleUrls: ['./anadirprendas.page.scss'],
  imports: [
    IonContent,
    IonHeader,
    IonIcon,
    IonToolbar,
    CommonModule,
    FormsModule,
    RouterLink
  ]
})
export class AnadirprendasPage {

  //Creamos un array vacio para almacenar si la prenda será prestamo, intercambio o ambas
  tiposSeleccionados: string[] = [];

  constructor() {
    addIcons({ imageOutline });
  }

  //Recibe el parámetro del botón pulsado
  seleccionarTipo(tipoSeleccionado: string) {
    //Comprueba si el tipo seleccionado está en el array, si lo está lo elimina, sino lo añade
    if (this.tiposSeleccionados.includes(tipoSeleccionado)) {
      this.tiposSeleccionados = this.tiposSeleccionados.filter(
        tipo => tipo !== tipoSeleccionado
      );
    } else {
      this.tiposSeleccionados.push(tipoSeleccionado);
    }
  }
}
