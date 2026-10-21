
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonIcon } from '@ionic/angular';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';

import {
  swapHorizontalOutline,
  mailUnreadOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-tarjetastusintercambios',
  templateUrl: './tarjetastusintercambios.page.html',
  styleUrls: ['./tarjetastusintercambios.page.scss'],
  standalone: true,
  imports: [CommonModule, IonIcon]
})
export class TarjetastusintercambiosPage {

  @Input() intercambio!: {
    id: number;
    imagenEntregada: string;
    imagenRecibida: string;
    fechaInicio: string;
    fechaFin: string;
  };

  constructor(private router: Router) {
    addIcons({
      swapHorizontalOutline,
      mailUnreadOutline
    });
  }

  anadirRecordatorio() {
    this.router.navigate(['/tabs/recordatorios']);
  }

}
