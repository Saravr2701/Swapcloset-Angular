import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Prenda } from '../../datos/catalogoprendas';

@Component({
  selector: 'app-tarjetasprendas',
  templateUrl: './tarjetasprendas.component.html',
  styleUrls: ['./tarjetasprendas.component.scss'],
  standalone: true,
  imports: [RouterLink]
})
export class TarjetasprendasComponent {
  //Creamos una variable en la que es obliagtorio introducir una prenda (la prenda que mostraremos)
  prenda = input.required<Prenda>();

}
