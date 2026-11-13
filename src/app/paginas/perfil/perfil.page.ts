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

  ]
})

//No separo los datos del ts principal porque solo es un perfil y se eliminará al conectar con la BD
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
      nombre: 'Chaqueta vaquera',
      imagen: 'assets/chaquetanegra.png',
      tipo: 'Intercambio',
      disponible: false
    },
    {
      id: 2,
      nombre: 'Conjunto azul',
      imagen: 'assets/conjuntoazul.png',
      tipo: 'Préstamo',
      disponible: true,
      fechaDisponible: '16/10'
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
      fechaFin: '09/10',
      tipo: 'Intercambio',
      recibida: true,
      devuelta: true,
    },
    {
      id: 2,
      imagen: 'assets/chaquetanegra.png',
      tipo: 'Préstamo',
      fechaInicio: '12/11',
      fechaFin: '16/11',
      devuelta: false,
    }
  ];

  constructor() {
    addIcons({ locationOutline, star, settingsOutline, notificationsOutline });
  }

}
