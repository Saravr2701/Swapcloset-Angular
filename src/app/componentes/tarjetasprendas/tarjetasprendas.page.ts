import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Prenda } from '../../datos/catalogoprendas';

@Component({
  selector: 'app-tarjetasprendas',
  templateUrl: './tarjetasprendas.page.html',
  styleUrls: ['./tarjetasprendas.page.scss'],
  standalone: true,
  imports: [RouterLink]
})
export class TarjetasprendasPage {
  //Creamos una variable en la que es obliagtorio introducir una prenda (la prenda que mostraremos)
  prenda = input.required<Prenda>();

}
