import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent } from '@ionic/angular';
import {TarjetasprendasPage} from "../../componentes/tarjetasprendas/tarjetasprendas.page";
import { HeaderPage } from '../../componentes/header/header.page';

@Component({
  selector: 'app-iniciotodo',
  templateUrl: './iniciodeportivo.page.html',
  styleUrls: ['./iniciodeportivo.page.scss'],
  standalone: true,
  imports: [IonContent,CommonModule, FormsModule, TarjetasprendasPage, HeaderPage]
})
export class IniciodeportivoPage implements OnInit {

  prendas = [
    {
      id: 1,
      titulo: 'Pack de 4 tops multicolor',
      subtitulo: 'S - Shein',
      etiqueta: 'Préstamo',
      imagen: './assets/packtops.png'
    },
    {
      id: 2,
      titulo: 'Zapatos running',
      subtitulo: '39 - Hooka',
      etiqueta: 'Intercambio',
      imagen: './assets/hooka.png'
    },
  ];

  limpiar() {
    console.log('Limpiando filtros...');
  }
  constructor() { }

  ngOnInit() {
  }

}
