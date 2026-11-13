import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SALDO } from '../../datos/saldo';
import {
  IonHeader,
  IonToolbar,
  IonIcon
} from '@ionic/angular';

import { addIcons } from 'ionicons';
import { searchOutline, optionsOutline } from 'ionicons/icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.page.html',
  styleUrls: ['./header.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    IonHeader,
    IonToolbar,
    IonIcon
  ]
})
export class HeaderPage {
  saldo = SALDO;

  //variable que usaremos para controlar si el filtro esta activo o no
  mostrarFiltros = false;

  //lista donde almacenamos todas las categorias existentes y donde debe llevar cada una
  categorias = [
    {
      nombre: 'Todo',
      ruta: '/tabs/iniciotodo'
    },
    {
      nombre: 'Formal',
      ruta: '/tabs/inicioformal'
    },
    {
      nombre: 'Casual',
      ruta: '/tabs/iniciocasual'
    },
    {
      nombre: 'Accesorios',
      ruta: '/tabs/inicioaccesorios'
    },
    {
      nombre: 'Calzado',
      ruta: '/tabs/iniciocalzado'
    },
    {
      nombre: 'Deportivo',
      ruta: '/tabs/iniciodeportivo'
    }
  ];

  constructor() {
    addIcons({ searchOutline, optionsOutline });
  }

}
