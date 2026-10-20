import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent } from '@ionic/angular';
import {TarjetasprendasPage} from "../../componentes/tarjetasprendas/tarjetasprendas.page";
import { HeaderPage } from '../../componentes/header/header.page';

@Component({
  selector: 'app-iniciotodo',
  templateUrl: './iniciotodo.page.html',
  styleUrls: ['./iniciotodo.page.scss'],
  standalone: true,
  imports: [IonContent,CommonModule, FormsModule, TarjetasprendasPage, HeaderPage]
})
export class IniciotodoPage implements OnInit {

  prendas = [
    {
      id: 1,
      titulo: 'Pendientes bañados oro',
      subtitulo: 'Tous',
      etiqueta: 'Intercambio',
      imagen: './assets/pendientestous.png'
    },
    {
      id: 2,
      titulo: 'Conjunto top y short',
      subtitulo: 'L - Mango',
      etiqueta: 'Préstamo',
      imagen: './assets/conjunto.png'
    },
    {
      id: 3,
      titulo: 'Zapatos running',
      subtitulo: '39 - Hooka',
      etiqueta: 'Intercambio',
      imagen: './assets/hooka.png'
    },
    {
      id: 4,
      titulo: 'Gabardina gris a cuadros',
      subtitulo: 'M - Stradivarius',
      etiqueta: 'Préstamo',
      imagen: './assets/gabardinagris.png'
    },
    {
      id: 5,
      titulo: 'Vaqueros skinny básicos',
      subtitulo: '40 - Levis',
      etiqueta: 'Intercambio',
      imagen: './assets/vaqueroslevis.png'
    },
    {
      id: 6,
      titulo: 'Pack de 4 tops multicolor',
      subtitulo: 'S - Shein',
      etiqueta: 'Préstamo',
      imagen: './assets/packtops.png'
    },
    {
      id: 7,
      titulo: 'Chaleco formal',
      subtitulo: 'S - Zara',
      etiqueta: 'Intercambio',
      imagen: './assets/chalecozara.png'
    },
    {
      id: 8,
      titulo: 'Pantalones capri rotos',
      subtitulo: '38 - H&M',
      etiqueta: 'Intercambio',
      imagen: './assets/caprisrotos.png'
    },
    {
      id: 9,
      titulo: 'Conjunto sofisticado',
      subtitulo: 'L - Zara',
      etiqueta: 'Préstamo',
      imagen: './assets/conjuntosofisticado.png'
    },
    {
      id: 10,
      titulo: 'Tacones Buganvilla',
      subtitulo: '38 - Maripaz',
      etiqueta: 'Préstamo',
      imagen: './assets/taconmaripaz.png'
    },
    {
      id: 11,
      titulo: 'Campus Gris',
      subtitulo: '42 - Adidas',
      etiqueta: 'Préstamo',
      imagen: './assets/campus.png'
    }
  ];

  limpiar() {
    console.log('Limpiando filtros...');
  }
  constructor() { }

  ngOnInit() {
  }

}
