import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent } from '@ionic/angular';

import { TarjetasprendasPage } from '../../componentes/tarjetasprendas/tarjetasprendas.page';
import { HeaderPage } from '../../componentes/header/header.page';

import { CATALOGO_PRENDAS } from '../../datos/catalogoprendas';

@Component({
  selector: 'app-iniciocasual',
  templateUrl: './iniciocasual.page.html',
  styleUrls: ['./iniciocasual.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    CommonModule,
    FormsModule,
    TarjetasprendasPage,
    HeaderPage
  ]
})
export class IniciocasualPage {

  prendas = CATALOGO_PRENDAS.filter(
    prenda => prenda.categorias.includes('casual')
  );

  constructor() {}

  limpiar() {
    console.log('Limpiando filtros...');
  }

}
