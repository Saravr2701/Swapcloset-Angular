import {Component, input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonIcon, IonCard } from '@ionic/angular';

@Component({
  selector: 'app-tarjetasprendas',
  templateUrl: './tarjetasprendas.page.html',
  styleUrls: ['./tarjetasprendas.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonIcon, IonCard, RouterLink]
})
export class TarjetasprendasPage implements OnInit {

  prenda = input.required<any>();
  sinFoto = false;

  constructor() { }

  ngOnInit() {
  }

}
