import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { IonContent, IonIcon, IonModal } from '@ionic/angular';
import { addIcons } from 'ionicons';
import {locationOutline, star, starOutline, arrowBackOutline, checkmarkCircleOutline} from 'ionicons/icons';
import { PERFILESUSUARIOS } from '../../datos/perfilesusuarios';
import { CATALOGO_PRENDAS } from '../../datos/catalogoprendas';

@Component({
  selector: 'app-perfilusuarios',
  templateUrl: './perfilusuarios.page.html',
  styleUrls: ['./perfilusuarios.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, IonContent, IonIcon, IonModal]
})
export class PerfilusuariosPage {
  nombreUsuario: string | null;
  datosPerfil;
  prendasVendedor;
  modalResenaAbierto = false;
  resenaPublicada = false;
  estrellasSeleccionadas = 0;
  comentarioResena = '';

  constructor(private route: ActivatedRoute, private location: Location) {
    addIcons({
      locationOutline,
      star,
      starOutline,
      arrowBackOutline,
      checkmarkCircleOutline
    });

    this.nombreUsuario = this.route.snapshot.paramMap.get('id');

    this.datosPerfil = PERFILESUSUARIOS.find(
      usuario => usuario.nombre === this.nombreUsuario
    );

    this.prendasVendedor = CATALOGO_PRENDAS.filter(
      prenda => prenda.propietario.nombre === this.nombreUsuario
    );
  }

  abrirModalResena() {
    this.estrellasSeleccionadas = 0;
    this.comentarioResena = '';
    this.resenaPublicada = false;
    this.modalResenaAbierto = true;
  }

  publicarResena() {
    if (this.estrellasSeleccionadas === 0 ||
      !this.comentarioResena.trim()) {
      return;
    }

    this.resenaPublicada = true;
  }

  cerrarModalResena() {
    this.modalResenaAbierto = false;
  }
}
