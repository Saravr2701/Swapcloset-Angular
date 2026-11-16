import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import {IonContent, IonIcon,} from '@ionic/angular';
import { addIcons } from 'ionicons';
import {locationOutline, star, arrowBackOutline} from 'ionicons/icons';
import {PERFILESUSUARIOS} from '../../datos/perfilesusuarios';
import {CATALOGO_PRENDAS} from '../../datos/catalogoprendas';

@Component({
  selector: 'app-perfilusuarios',
  templateUrl: './perfilusuarios.page.html',
  styleUrls: ['./perfilusuarios.page.scss'],
  standalone: true,
  imports: [CommonModule, RouterLink, IonContent, IonIcon]
})
export class PerfilusuariosPage {

  // Nombre del vendedor recibido desde la URL
  nombreUsuario: string | null;

  // Datos del vendedor seleccionado
  datosPerfil;

  // Prendas que pertenecen a ese vendedor
  prendasVendedor;

  constructor(private route: ActivatedRoute, private location: Location) {
    addIcons({locationOutline, star, arrowBackOutline});

    this.nombreUsuario = this.route.snapshot.paramMap.get('id');

    this.datosPerfil = PERFILESUSUARIOS.find(
      usuario => usuario.nombre === this.nombreUsuario
    );

    this.prendasVendedor = CATALOGO_PRENDAS.filter(
      prenda => prenda.propietario.nombre === this.nombreUsuario
    );
  }
}
