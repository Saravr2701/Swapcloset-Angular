
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonIcon } from '@ionic/angular';

import { addIcons } from 'ionicons';
import {
  swapHorizontalOutline,
  mailUnreadOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-tarjetastusintercambios',
  templateUrl: './tarjetastusprestamos.page.html',
  styleUrls: ['./tarjetastusprestamos.page.scss'],
  standalone: true,
  imports: [CommonModule, IonIcon]
})
export class TarjetastusprestamosPage {

  @Input() intercambio!: {
    id: number;
    imagenEntregada: string;
    imagenRecibida: string;
    fechaInicio: string;
    fechaFin: string;
  };

  constructor() {
    addIcons({
      swapHorizontalOutline,
      mailUnreadOutline
    });
  }

}
