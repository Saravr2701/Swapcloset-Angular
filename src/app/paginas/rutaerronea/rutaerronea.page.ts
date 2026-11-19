import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonContent, IonIcon } from '@ionic/angular';

import { addIcons } from 'ionicons';
import { searchOutline, homeOutline } from 'ionicons/icons';

@Component({
  selector: 'app-rutaerronea',
  templateUrl: './rutaerronea.page.html',
  styleUrls: ['./rutaerronea.page.scss'],
  standalone: true,
  imports: [RouterLink, IonContent, IonIcon]
})
export class RutaerroneaPage {

  constructor() {
    addIcons({ searchOutline, homeOutline });
  }

}
