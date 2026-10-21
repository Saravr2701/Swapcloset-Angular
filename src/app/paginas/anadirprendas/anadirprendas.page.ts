
import { Component, OnInit } from '@angular/core';
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
export class AnadirprendasPage implements OnInit {

  tiposSeleccionados: string[] = [];

  constructor() {
    addIcons({ imageOutline });
  }

  ngOnInit() {
  }

  seleccionarTipo(tipo: string) {

    if (this.tiposSeleccionados.includes(tipo)) {

      this.tiposSeleccionados = this.tiposSeleccionados.filter(
        t => t !== tipo
      );

    } else {

      this.tiposSeleccionados.push(tipo);

    }

  }

}
