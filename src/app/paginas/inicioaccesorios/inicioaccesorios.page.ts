import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent } from '@ionic/angular';

import { TarjetasprendasPage } from '../../componentes/tarjetasprendas/tarjetasprendas.page';
import { HeaderPage } from '../../componentes/header/header.page';

import { CATALOGO_PRENDAS } from '../../datos/catalogoprendas';

@Component({
  selector: 'app-inicioaccesorios',
  templateUrl: './inicioaccesorios.page.html',
  styleUrls: ['./inicioaccesorios.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    CommonModule,
    FormsModule,
    TarjetasprendasPage,
    HeaderPage
  ]
})
export class InicioaccesoriosPage {

  //Guardamos las prendas de nuestro catálogo filtradas por la categoria accesorios
  prendas = CATALOGO_PRENDAS.filter(
    prenda => prenda.categorias.includes('accesorios')
  );

  constructor() {}

  limpiar() {
    console.log('Limpiando filtros...');
  }

}
