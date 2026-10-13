import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular';
import {TarjetasprendasPage} from "../../componentes/tarjetasprendas/tarjetasprendas.page";

@Component({
  selector: 'app-iniciotodo',
  templateUrl: './iniciotodo.page.html',
  styleUrls: ['./iniciotodo.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, TarjetasprendasPage]
})
export class IniciotodoPage implements OnInit {

  prendas = [
    {
      id: 1,
      titulo: 'Pendientes bañados oro',
      subtitulo: 'Tous',
      etiqueta: 'Intercambio',
      imagen: 'assets/pendientes.jpg'
    },
    {
      id: 2,
      titulo: 'Chaqueta de cuero',
      subtitulo: 'M - Bershka',
      etiqueta: 'Intercambio',
      imagen: 'assets/chaqueta.jpg'
    },
    {
      id: 3,
      titulo: 'Pantalones capri rotos',
      subtitulo: 'S - Zara',
      etiqueta: 'Intercambio',
      imagen: 'assets/pantalones.jpg'
    },
    {
      id: 4,
      titulo: 'Pack de 4 tops multicolor',
      subtitulo: 'M - Stradivarius',
      etiqueta: 'Intercambio',
      imagen: 'assets/tops.jpg'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
