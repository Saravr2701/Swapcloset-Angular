import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonButton, IonContent, IonHeader, IonIcon, IonToolbar} from '@ionic/angular';
import {RouterLink} from "@angular/router";
import {RECORDATORIOS} from '../../datos/recordatorios';

@Component({
  selector: 'app-recordatorios',
  templateUrl: './recordatorios.page.html',
  styleUrls: ['./recordatorios.page.scss'],
  imports: [IonContent, IonHeader, IonToolbar, CommonModule, FormsModule, IonButton, IonIcon, RouterLink]
})
export class RecordatoriosPage {

  recordatorios= RECORDATORIOS;

}
