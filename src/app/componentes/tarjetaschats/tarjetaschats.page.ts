import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Chat } from '../../datos/mensajeschats';

@Component({
  selector: 'app-tarjetaschats',
  templateUrl: './tarjetaschats.page.html',
  styleUrls: ['./tarjetaschats.page.scss'],
  standalone: true,
  imports: [CommonModule, RouterLink]
})
export class TarjetaschatsPage {
  //Creamos una variable que recibirá datos (input) y que esos datos serán del tipo Chat (la interfaz creada en el ts de los datos)
  @Input() chat!: Chat;
}
