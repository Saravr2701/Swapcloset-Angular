import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { IonContent, IonIcon } from '@ionic/angular';

import { addIcons } from 'ionicons';
import {
  arrowBackOutline,
  locationOutline,
  star
} from 'ionicons/icons';

import { HeaderPage } from '../header/header.page';
import {
  CATALOGO_PRENDAS,
  Prenda
} from '../../datos/catalogoprendas';

@Component({
  selector: 'app-detalleprenda',
  templateUrl: './detalleprenda.page.html',
  styleUrls: ['./detalleprenda.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    IonContent,
    IonIcon,
    HeaderPage
  ]
})
export class DetalleprendaPage implements OnInit {

  prenda?: Prenda;
  mensajeSolicitud = false;

  constructor(private route: ActivatedRoute, private location: Location) {
    addIcons({
      arrowBackOutline,
      locationOutline,
      star
    });
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    console.log('ID recibido:', id);

    this.prenda = CATALOGO_PRENDAS.find(
      articulo => articulo.id === id
    );

    console.log('Prenda encontrada:', this.prenda);
  }

  get marca(): string {
    const subtitulo = this.prenda?.subtitulo ?? '';

    return subtitulo.includes(' - ')
      ? subtitulo.split(' - ').pop() ?? ''
      : subtitulo;
  }

  get talla(): string {
    if (this.prenda?.talla) {
      return this.prenda.talla;
    }

    const subtitulo = this.prenda?.subtitulo ?? '';

    return subtitulo.includes(' - ')
      ? subtitulo.split(' - ')[0]
      : 'No indicada';
  }

  volver() {
    this.location.back();
  }

  mostrarAviso() {
    this.mensajeSolicitud = true;
  }

}
