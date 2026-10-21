import {Component, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';

@Component({
  selector: 'app-tarjetasperfil',
  templateUrl: './tarjetastusprendas.page.html',
  styleUrls: ['./tarjetastusprendas.page.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class TarjetastusprendasPage {

  @Input() prenda!: {
    id: number;
    nombre: string;
    imagen: string;
    tipo: string;
    disponible: boolean;
    fechaDisponible?: string;
  };

}
