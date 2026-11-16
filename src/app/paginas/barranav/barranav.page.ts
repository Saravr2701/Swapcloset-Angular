import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import { arrowBackOutline, personOutline } from 'ionicons/icons';
import { Router } from '@angular/router';
import { IonTabBar, IonTabs, IonTabButton, IonIcon, IonLabel } from '@ionic/angular';


@Component({
  selector: 'app-barranav',
  templateUrl: './barranav.page.html',
  styleUrls: ['./barranav.page.scss'],
  imports: [CommonModule, FormsModule, IonTabBar, IonTabs, IonTabButton, IonIcon, IonLabel]
})
export class BarranavPage implements OnInit {

  readonly router = inject(Router);

  constructor() {
    addIcons({ arrowBackOutline, personOutline });
  }

  ngOnInit() {
  }

}
