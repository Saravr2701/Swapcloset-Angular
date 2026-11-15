import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { MIS_PRENDAS } from '../../datos/misprendas';

import {IonContent, IonHeader, IonToolbar, IonIcon, IonButton} from '@ionic/angular';

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

//No separo los datos del ts principal (como las prendas o lso recordatorios) porque solo es un perfil y se eliminará al conectar con la BD
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

  tusPrendas = MIS_PRENDAS;

  tusPrendasTemporales = [
    {
      id: 1,
      imagenEntregada: 'assets/bolsocuerdasmarron.png',
      imagenRecibida: 'assets/bolsoestampadomarron.png',
      fechaInicio: '21/09',
      fechaFin: '09/10',
      tipo: 'Intercambio',
      recibida: true,
      devuelta: true,
      recordatorio: false,
    },
    {
      id: 2,
      imagenRecibida: 'assets/conjunto.png',
      tipo: 'Préstamo',
      fechaInicio: '12/11',
      fechaFin: '16/11',
      devuelta: false,
      recordatorio: false,
    }
  ];

  constructor(private router: Router) {
    addIcons({ locationOutline, star, settingsOutline, notificationsOutline });
  }

  get hayRecordatorios() {
    return this.tusPrendasTemporales.some(
      prenda => prenda.recordatorio
    );
  }

  abrirRecordatorio(prenda: any) {
    if (prenda.recordatorio) {
      this.router.navigate(['/tabs/recordatorios']);
    } else {
      prenda.recordatorio = true;
    }
  }
}
