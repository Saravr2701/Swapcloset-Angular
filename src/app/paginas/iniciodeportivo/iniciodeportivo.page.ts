
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent } from '@ionic/angular';

import { TarjetasprendasPage } from '../../componentes/tarjetasprendas/tarjetasprendas.page';
import { HeaderPage } from '../../componentes/header/header.page';

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
    TarjetasprendasPage,
    HeaderPage
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
