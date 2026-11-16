import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonContent, IonHeader,IonToolbar} from '@ionic/angular';
import {RECORDATORIOS} from '../../datos/recordatorios';

@Component({
  selector: 'app-recordatorios',
  templateUrl: './recordatorios.page.html',
  styleUrls: ['./recordatorios.page.scss'],
  imports: [IonContent, IonHeader, IonToolbar, CommonModule, FormsModule]
})
export class RecordatoriosPage {

  recordatorios= RECORDATORIOS;

}
