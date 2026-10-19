import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent } from '@ionic/angular';
import {TarjetasprendasPage} from "../../componentes/tarjetasprendas/tarjetasprendas.page";
import { HeaderPage } from '../../componentes/header/header.page';

@Component({
  selector: 'app-iniciotodo',
  templateUrl: './inicioaccesorios.page.html',
  styleUrls: ['./inicioaccesorios.page.scss'],
  standalone: true,
  imports: [IonContent,CommonModule, FormsModule, TarjetasprendasPage, HeaderPage]
})
export class InicioaccesoriosPage implements OnInit {

  prendas = [
    {
      id: 1,
      titulo: 'Pendientes bañados oro',
      subtitulo: 'Tous',
      etiqueta: 'Intercambio',
      imagen: './assets/pendientestous.png'
    }
  ];

  limpiar() {
    console.log('Limpiando filtros...');
  }
  constructor() { }

  ngOnInit() {
  }

}
