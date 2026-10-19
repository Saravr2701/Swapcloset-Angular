import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tarjetaschats',
  templateUrl: './tarjetaschats.page.html',
  styleUrls: ['./tarjetaschats.page.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class TarjetaschatsPage {

  @Input() chat!: {
    id: number;
    nombre: string;
    ultimoMensaje: string;
    imagen: string;
    sinLeer?: boolean;
  };

}
