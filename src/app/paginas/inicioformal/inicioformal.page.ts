import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent } from '@ionic/angular';

import { TarjetasprendasPage } from '../../componentes/tarjetasprendas/tarjetasprendas.page';
import { HeaderPage } from '../../componentes/header/header.page';

import { CATALOGO_PRENDAS } from '../../datos/catalogoprendas';

@Component({
  selector: 'app-inicioformal',
  templateUrl: './inicioformal.page.html',
  styleUrls: ['./inicioformal.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    CommonModule,
    FormsModule,
    TarjetasprendasPage,
    HeaderPage
  ]
})
export class InicioformalPage {

  prendas = CATALOGO_PRENDAS.filter(
    prenda => prenda.categorias.includes('formal')
  );

  constructor() {}

  limpiar() {
    console.log('Limpiando filtros...');
  }

}
