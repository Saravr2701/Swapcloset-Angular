import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular';
import {pulseOutline, personOutline, water, chatbubblesOutline, duplicateOutline, homeOutline} from "ionicons/icons";
import {addIcons} from "ionicons";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {
    addIcons({pulseOutline, personOutline, water, chatbubblesOutline, duplicateOutline, homeOutline });
  }
}
