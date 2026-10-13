import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';

@Component({
  selector: 'app-anadirprendas',
  templateUrl: './anadirprendas.page.html',
  styleUrls: ['./anadirprendas.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class AnadirprendasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
