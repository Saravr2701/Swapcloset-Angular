import {Component, input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tarjetasprendas',
  templateUrl: './tarjetasprendas.page.html',
  styleUrls: ['./tarjetasprendas.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class TarjetasprendasPage implements OnInit {

  prenda = input.required<any>();
  sinFoto = false;

  constructor() { }

  ngOnInit() {
  }

}
