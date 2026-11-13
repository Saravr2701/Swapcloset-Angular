import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonButton, IonContent, IonHeader, IonIcon, IonTitle, IonToolbar} from '@ionic/angular';
import {ActivatedRoute, RouterLink} from '@angular/router';
import { CATALOGO_PRENDAS, Prenda } from '../../datos/catalogoprendas';
import { addIcons } from 'ionicons';
import { imageOutline } from 'ionicons/icons';
import { SALDO } from '../../datos/saldo';

@Component({
  selector: 'app-solicitarprenda',
  templateUrl: './solicitarprenda.page.html',
  styleUrls: ['./solicitarprenda.page.scss'],
  imports: [IonContent, IonHeader, IonToolbar, CommonModule, FormsModule, IonIcon, RouterLink]
})
export class SolicitarprendaPage {

  prenda?: Prenda;

  constructor(private route: ActivatedRoute) {
    addIcons({ imageOutline });
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this.prenda = CATALOGO_PRENDAS.find(
      articulo => articulo.id === id
    );
  }

  saldo = SALDO;

  agregarDeposito() {
    this.saldo.cantidad = 40;
  }

  disminuirDeposito() {
    this.saldo.cantidad = 0;
  }
}
