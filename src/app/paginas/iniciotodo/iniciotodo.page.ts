import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent } from '@ionic/angular';
import { TarjetasprendasComponent } from '../../componentes/tarjetasprendas/tarjetasprendas.component';
import { HeaderComponent } from '../../componentes/header/header.component';
import { CATALOGO_PRENDAS } from '../../datos/catalogoprendas';

@Component({
  selector: 'app-iniciotodo',
  templateUrl: './iniciotodo.page.html',
  styleUrls: ['./iniciotodo.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    CommonModule,
    FormsModule,
    TarjetasprendasComponent,
    HeaderComponent
  ]
})
export class IniciotodoPage {

  //Guardamos las prendas filtradas por su categoria
  // (creamos para mostrar todas las prendas, cuando tengamos la bd conectada se haría con un select *)
  prendas = CATALOGO_PRENDAS.filter(
    prenda => prenda.categorias.includes('todo')
  );

  constructor() {}

  limpiar() {
    console.log('Limpiando filtros...');
  }

}
