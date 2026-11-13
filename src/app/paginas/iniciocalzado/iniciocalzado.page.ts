import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent } from '@ionic/angular';

import { TarjetasprendasPage } from '../../componentes/tarjetasprendas/tarjetasprendas.page';
import { HeaderPage } from '../../componentes/header/header.page';

import { CATALOGO_PRENDAS } from '../../datos/catalogoprendas';

@Component({
  selector: 'app-iniciocalzado',
  templateUrl: './iniciocalzado.page.html',
  styleUrls: ['./iniciocalzado.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    CommonModule,
    FormsModule,
    TarjetasprendasPage,
    HeaderPage
  ]
})
export class IniciocalzadoPage {

  zapatos = CATALOGO_PRENDAS.filter(
    prenda => prenda.categorias.includes('calzado')
  );

  constructor() {}

  limpiar() {
    console.log('Limpiando filtros...');
  }

}
