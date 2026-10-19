import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent } from '@ionic/angular';
import {TarjetasprendasPage} from "../../componentes/tarjetasprendas/tarjetasprendas.page";
import { HeaderPage } from '../../componentes/header/header.page';

@Component({
  selector: 'app-iniciotodo',
  templateUrl: './inicioformal.page.html',
  styleUrls: ['./inicioformal.page.scss'],
  standalone: true,
  imports: [IonContent,CommonModule, FormsModule, TarjetasprendasPage, HeaderPage]
})
export class InicioformalPage implements OnInit {

  prendas = [
    {
      id: 1,
      titulo: 'Gabardina gris a cuadros',
      subtitulo: 'M - Stradivarius',
      etiqueta: 'Préstamo',
      imagen: './assets/gabardinagris.png'
    },
    {
      id: 2,
      titulo: 'Chaleco formal',
      subtitulo: 'S - Zara',
      etiqueta: 'Intercambio',
      imagen: './assets/chalecozara.png'
    },
    {
      id: 3,
      titulo: 'Conjunto sofisticado',
      subtitulo: 'L - Zara',
      etiqueta: 'Préstamo',
      imagen: './assets/conjuntosofisticado.png'
    },
  ];

  limpiar() {
    console.log('Limpiando filtros...');
  }
  constructor() { }

  ngOnInit() {
  }

}
