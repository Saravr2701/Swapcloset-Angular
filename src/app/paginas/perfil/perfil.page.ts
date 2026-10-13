import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {  RouterLink } from '@angular/router'
import {IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonRouterLink} from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonRouterLink, IonButton, RouterLink]
})
export class PerfilPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
