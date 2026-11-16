import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent } from '@ionic/angular';

import { TarjetasprendasComponent } from '../../componentes/tarjetasprendas/tarjetasprendas.component';
import { HeaderComponent } from '../../componentes/header/header.component';

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
    TarjetasprendasComponent,
    HeaderComponent
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
