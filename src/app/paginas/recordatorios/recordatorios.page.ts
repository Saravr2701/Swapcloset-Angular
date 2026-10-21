
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonIcon } from '@ionic/angular';

import { addIcons } from 'ionicons';
import {
  locationOutline,
  star,
  swapHorizontalOutline,
  checkmarkOutline,
  closeOutline,
  notificationsOutline
} from 'ionicons/icons';

type EstadoSolicitud = 'pendiente' | 'aceptada' | 'rechazada';

interface Solicitud {
  id: number;
  tipo: 'prestamo' | 'intercambio';
  imagenSolicitada: string;
  imagenOfrecida: string;
  fechaInicio: string;
  fechaFin: string;
  estado: EstadoSolicitud;
}

@Component({
  selector: 'app-recordatorios',
  templateUrl: './recordatorios.page.html',
  styleUrls: ['./recordatorios.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent,
    IonIcon
  ]
})
export class RecordatoriosPage {

  datosPerfil = {
    nombre: 'Mariana L.',
    imagen: 'assets/mariana.jpg',
    ubicacion: 'Calle Calatrava, Sevilla',
    valoracion: 4.8,
    resenas: 24
  };

  solicitudes: Solicitud[] = [
    {
      id: 1,
      tipo: 'intercambio',
      imagenSolicitada: 'assets/toplentejuelas.png',
      imagenOfrecida: 'assets/conjunto.png',
      fechaInicio: '24/09',
      fechaFin: '03/10',
      estado: 'pendiente'
    },
    {
      id: 2,
      tipo: 'prestamo',
      imagenSolicitada: 'assets/bolsoestampadomarron.png',
      imagenOfrecida: '',
      fechaInicio: '29/09',
      fechaFin: '12/10',
      estado: 'pendiente'
    }
  ];

  teDebenDevolver = [
    {
      id: 1,
      nombre: 'Bolso diario cuero',
      persona: 'Ana H.',
      imagen: 'assets/bolsocuerdasmarron.png',
      fecha: '09/10',
      recibido: false
    },
    {
      id: 2,
      nombre: 'Conjunto veraniego azul',
      persona: 'Laura J.',
      imagen: 'assets/conjuntoazul.png',
      fecha: '16/10',
      recibido: false
    }
  ];

  debesDevolver = [
    {
      id: 1,
      nombre: 'Bolso fiesta dorado',
      persona: 'Ana H.',
      imagen: 'assets/bolsodorado.png',
      fecha: '09/10'
    }
  ];

  constructor() {
    addIcons({
      locationOutline,
      star,
      swapHorizontalOutline,
      checkmarkOutline,
      closeOutline,
      notificationsOutline
    });
  }

  responderSolicitud(
    id: number,
    respuesta: 'aceptada' | 'rechazada'
  ) {
    const solicitud = this.solicitudes.find(s => s.id === id);

    if (solicitud) {
      solicitud.estado = respuesta;
    }
  }

  marcarRecibido(id: number) {
    const devolucion = this.teDebenDevolver.find(
      d => d.id === id
    );

    if (devolucion) {
      devolucion.recibido = true;
    }
  }
}
