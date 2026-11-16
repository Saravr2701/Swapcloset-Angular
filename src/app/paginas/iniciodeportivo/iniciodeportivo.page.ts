
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent } from '@ionic/angular';

import { TarjetasprendasComponent } from '../../componentes/tarjetasprendas/tarjetasprendas.component';
import { HeaderComponent } from '../../componentes/header/header.component';

import { CATALOGO_PRENDAS } from '../../datos/catalogoprendas';

@Component({
  selector: 'app-iniciodeportivo',
  templateUrl: './iniciodeportivo.page.html',
  styleUrls: ['./iniciodeportivo.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    CommonModule,
    FormsModule,
    TarjetasprendasComponent,
    HeaderComponent
  ]
})
export class IniciodeportivoPage implements OnInit {

  prendas = CATALOGO_PRENDAS.filter(
    prenda => prenda.categorias.includes('deportivo')
  );

  constructor() {}

  ngOnInit() {}

  limpiar() {
    console.log('Limpiando filtros...');
  }

}
