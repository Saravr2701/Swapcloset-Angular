import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';

@Component({
  selector: 'app-inicioaccesorios',
  templateUrl: './inicioaccesorios.page.html',
  styleUrls: ['./inicioaccesorios.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class InicioaccesoriosPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
