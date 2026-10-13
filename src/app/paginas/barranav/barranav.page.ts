import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonTabBar, IonTabs, IonTabButton, IonIcon, IonLabel } from '@ionic/angular';

@Component({
  selector: 'app-barranav',
  templateUrl: './barranav.page.html',
  styleUrls: ['./barranav.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonTabBar, IonTabs, IonTabButton, IonIcon, IonLabel]
})
export class BarranavPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
