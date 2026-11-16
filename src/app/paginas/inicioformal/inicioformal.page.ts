import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent } from '@ionic/angular';

import { TarjetasprendasComponent } from '../../componentes/tarjetasprendas/tarjetasprendas.component';
import { HeaderComponent } from '../../componentes/header/header.component';

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
    TarjetasprendasComponent,
    HeaderComponent
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
