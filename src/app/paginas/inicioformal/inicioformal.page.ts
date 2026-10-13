import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';

@Component({
  selector: 'app-inicioformal',
  templateUrl: './inicioformal.page.html',
  styleUrls: ['./inicioformal.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class InicioformalPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
