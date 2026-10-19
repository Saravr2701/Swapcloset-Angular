import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonHeader, IonToolbar, IonIcon } from '@ionic/angular';
import { searchOutline, optionsOutline } from 'ionicons/icons';
import {addIcons} from "ionicons";

@Component({
  selector: 'app-header',
  templateUrl: './header.page.html',
  styleUrls: ['./header.page.scss'],
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, IonHeader, IonToolbar, IonIcon]
})
export class HeaderPage implements OnInit {

  constructor() {
    addIcons({ searchOutline, optionsOutline });
  }

  ngOnInit() {}

}
