import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent } from '@ionic/angular';
import {TarjetasprendasPage} from "../../componentes/tarjetasprendas/tarjetasprendas.page";
import { HeaderPage } from '../../componentes/header/header.page';

@Component({
  selector: 'app-iniciotodo',
  templateUrl: './iniciocalzado.page.html',
  styleUrls: ['./iniciocalzado.page.scss'],
  standalone: true,
  imports: [IonContent,CommonModule, FormsModule, TarjetasprendasPage, HeaderPage]
})
export class IniciocalzadoPage implements OnInit {

  zapatos = [
    {
      id: 1,
      titulo: 'Converse Chunk Bota',
      subtitulo: '38 - Converse',
      etiqueta: 'Préstamo',
      imagen: './assets/conversebota.png'
    },
    {
      id: 2,
      titulo: 'Airforce One Blancas',
      subtitulo: '36 - Nike',
      etiqueta: 'Intercambio',
      imagen: './assets/airforce.png'
    },
    {
      id: 3,
      titulo: 'Tacones Buganvilla',
      subtitulo: '38 - Maripaz',
      etiqueta: 'Préstamo',
      imagen: './assets/taconmaripaz.png'
    },
    {
      id: 4,
      titulo: 'Jordan rojo y blanco',
      subtitulo: '38 - Nike',
      etiqueta: 'Intercambio',
      imagen: './assets/jordan.png'
    },
    {
      id: 5,
      titulo: 'Campus Gris',
      subtitulo: '42 - Adidas',
      etiqueta: 'Préstamo',
      imagen: './assets/campus.png'
    },
  ];

  limpiar() {
    console.log('Limpiando filtros...');
  }
  constructor() { }

  ngOnInit() {
  }

}
