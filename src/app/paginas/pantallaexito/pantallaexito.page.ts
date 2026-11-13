import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';

@Component({
  selector: 'app-pantallaexito',
  templateUrl: './pantallaexito.page.html',
  styleUrls: ['./pantallaexito.page.scss'],
  imports: [IonContent, IonHeader, IonToolbar, CommonModule, FormsModule]
})
export class PantallaexitoPage {

  constructor() { }

}
