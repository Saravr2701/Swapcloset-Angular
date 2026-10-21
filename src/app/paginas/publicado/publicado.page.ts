
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-publicado',
  templateUrl: './publicado.page.html',
  styleUrls: ['./publicado.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    RouterLink
  ]
})
export class PublicadoPage {

}
