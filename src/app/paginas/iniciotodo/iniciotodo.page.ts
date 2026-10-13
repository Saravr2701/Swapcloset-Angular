import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';

@Component({
  selector: 'app-iniciotodo',
  templateUrl: './iniciotodo.page.html',
  styleUrls: ['./iniciotodo.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class IniciotodoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
