import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent } from '@ionic/angular';
import {TarjetasprendasPage} from "../../componentes/tarjetasprendas/tarjetasprendas.page";
import { HeaderPage } from '../../componentes/header/header.page';

@Component({
  selector: 'app-iniciotodo',
  templateUrl: './iniciocasual.page.html',
  styleUrls: ['./iniciocasual.page.scss'],
  standalone: true,
  imports: [IonContent,CommonModule, FormsModule, TarjetasprendasPage, HeaderPage]
})
export class IniciocasualPage implements OnInit {

  prendas = [
    {
      id: 1,
      titulo: 'Vaqueros skinny básicos',
      subtitulo: '40 -Levis',
      etiqueta: 'Intercambio',
      imagen: './assets/vaqueroslevis.png'
    },
    {
      id: 2,
      titulo: 'Pack de 4 tops multicolor',
      subtitulo: 'S - Shein',
      etiqueta: 'Intercambio',
      imagen: './assets/packtops.png'
    },
    {
      id: 3,
      titulo: 'Conjunto top y short',
      subtitulo: 'L - Mango',
      etiqueta: 'Préstamo',
      imagen: './assets/conjunto.png'
    },
    {
      id: 4,
      titulo: 'Pantalones capri rotos',
      subtitulo: '38 - H&M',
      etiqueta: 'Intercambio',
      imagen: './assets/caprisrotos.png'
    },
  ];

  limpiar() {
    console.log('Limpiando filtros...');
  }
  constructor() { }

  ngOnInit() {
  }

}
