
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonIcon,
  IonButton
} from '@ionic/angular';

import { addIcons } from 'ionicons';
import {locationOutline, star, settingsOutline, notificationsOutline} from 'ionicons/icons';

import { TarjetastusprendasPage } from '../../componentes/tarjetastusprendas/tarjetastusprendas.page';
import { TarjetastusintercambiosPage } from '../../componentes/tarjetastusintercambios/tarjetastusintercambios.page';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    IonContent,
    IonHeader,
    IonToolbar,
    IonIcon,
    IonButton,
    TarjetastusprendasPage,
    TarjetastusintercambiosPage
  ]
})
export class PerfilPage {

  datosPerfil = {
    nombre: 'Mariana L.',
    imagen: 'assets/mariana.jpg',
    ubicacion: 'Calle Calatrava, Sevilla',
    valoracion: 4.8,
    resenas: 24,

    estilosFavoritos: [
      'Accesorios',
      'Casual',
      'Zapatos',
      'Streetwear'
    ],

    tallas: [
      'Altura - 1,61',
      'Zapatos - 38/39',
      'Parte superior - S',
      'Parte inferior - 40/M'
    ]
  };

  tusPrendas = [
    {
      id: 1,
      nombre: 'Chaqueta de cuero',
      imagen: 'assets/chaquetanegra.png',
      tipo: 'Intercambio',
      disponible: true
    },
    {
      id: 2,
      nombre: 'Conjunto azul',
      imagen: 'assets/conjuntoazul.png',
      tipo: 'Préstamo',
      disponible: false,
      fechaDisponible: '16/10'
    },
    {
      id: 3,
      nombre: 'Bolso estampado',
      imagen: 'assets/bolsoestampadomarron.png',
      tipo: 'Préstamo',
      disponible: true
    },
    {
      id: 4,
      nombre: 'Top de lentejuelas',
      imagen: 'assets/toplentejuelas.png',
      tipo: 'Intercambio',
      disponible: true
    },
    {
      id: 5,
      nombre: 'Bolso marron de cuerdas',
      imagen: 'assets/bolsocuerdasmarron.png',
      tipo: 'Intercambio',
      disponible: false,
      fechaDisponible: '09/10'
    }
  ];

  tusIntercambios = [
    {
      id: 1,
      imagenEntregada: 'assets/bolsocuerdasmarron.png',
      imagenRecibida: 'assets/bolsoestampadomarron.png',
      fechaInicio: '21/09',
      fechaFin: '09/10'
    }
  ];

  constructor() {
    addIcons({ locationOutline, star, settingsOutline, notificationsOutline });
  }

}
