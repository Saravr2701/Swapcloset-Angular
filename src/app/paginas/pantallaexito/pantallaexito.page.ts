import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonToolbar } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pantallaexito',
  templateUrl: './pantallaexito.page.html',
  styleUrls: ['./pantallaexito.page.scss'],
  imports: [IonContent, IonHeader, IonToolbar, CommonModule, FormsModule, RouterLink]
})
export class PantallaexitoPage {

  constructor() { }

}
