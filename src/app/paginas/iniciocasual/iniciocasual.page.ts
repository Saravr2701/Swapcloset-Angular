import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent } from '@ionic/angular';

import { TarjetasprendasComponent } from '../../componentes/tarjetasprendas/tarjetasprendas.component';
import { HeaderComponent } from '../../componentes/header/header.component';

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
    TarjetasprendasComponent,
    HeaderComponent
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
