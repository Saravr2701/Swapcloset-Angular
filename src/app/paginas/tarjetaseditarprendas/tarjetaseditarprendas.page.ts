import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {IonContent, IonHeader, IonToolbar, IonModal, IonIcon} from '@ionic/angular';
import { RouterLink } from '@angular/router';

import { MIS_PRENDAS, MiPrenda } from '../../datos/misprendas';
import { addIcons } from 'ionicons';
import { checkmarkCircleOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tarjetaseditarprendas',
  templateUrl: './tarjetaseditarprendas.page.html',
  styleUrls: ['./tarjetaseditarprendas.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonContent, IonHeader, IonToolbar, RouterLink, IonModal, IonIcon]})
export class TarjetaseditarprendasPage implements OnInit {

  prenda?: MiPrenda;
  tipoSeleccionado: 'Intercambio' | 'Préstamo' = 'Intercambio';
  modalBorradoAbierto = false;

  constructor(private route: ActivatedRoute, private router: Router) {
    addIcons({ checkmarkCircleOutline });
  }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    const encontrada = MIS_PRENDAS.find(
      articulo => articulo.id === id
    );

    if (encontrada) {
      this.prenda = { ...encontrada };
    }

    if (this.prenda) {
      this.tipoSeleccionado = this.prenda.tipo;
    }
  }

  guardarCambios() {
    if (!this.prenda) return;

    const indice = MIS_PRENDAS.findIndex(
      articulo => articulo.id === this.prenda!.id
    );

    if (indice !== -1) {
      MIS_PRENDAS[indice] = { ...this.prenda };
    }

    this.router.navigate(['/tabs/perfil']);
  }

  cancelar() {
    this.router.navigate(['/tabs/perfil']);
  }

  borrarPrenda() {
    if (!this.prenda) return;
    const id = this.prenda.id;
    const indice = MIS_PRENDAS.findIndex(
      articulo => articulo.id === id
    );

    if (indice === -1) return;
    MIS_PRENDAS.splice(indice, 1);
    this.modalBorradoAbierto = true;
  }

  cerrarModalBorrado() {
    this.modalBorradoAbierto = false;
    this.router.navigate(['/tabs/perfil']);
  }
}
