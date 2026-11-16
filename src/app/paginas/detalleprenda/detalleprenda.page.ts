import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { IonContent, IonIcon } from '@ionic/angular';
import { PERFILESUSUARIOS } from '../../datos/perfilesusuarios';
import { addIcons } from 'ionicons';
import {arrowBackOutline, locationOutline, star} from 'ionicons/icons';
import { HeaderComponent } from '../../componentes/header/header.component';
import {CATALOGO_PRENDAS, Prenda} from '../../datos/catalogoprendas';

@Component({
  selector: 'app-detalleprenda',
  templateUrl: './detalleprenda.page.html',
  styleUrls: ['./detalleprenda.page.scss'],
  standalone: true,
  imports: [CommonModule, RouterLink, IonContent, IonIcon, HeaderComponent]})
export class DetalleprendaPage implements OnInit {

  prenda?: Prenda;
  mensajeSolicitud = false;
  imagenVendedor = '';
  indiceFoto = 0;

  constructor(private route: ActivatedRoute,private location: Location,private router: Router) {
    addIcons({arrowBackOutline, locationOutline, star});
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this.prenda = CATALOGO_PRENDAS.find(
      articulo => articulo.id === id
    );

    if (this.prenda) {
      const vendedor = PERFILESUSUARIOS.find(
        usuario => usuario.nombre === this.prenda?.propietario.nombre
      );
      this.imagenVendedor = vendedor?.imagen || '';
    }

    this.indiceFoto = 0;
  }
  //Creamos un getter en el cual si no hay prendas sale directamente y sino devuelve el array de fotos
  get fotosPrenda(): string[] {
    if (!this.prenda) {
      return [];
    }
    return this.prenda.imagen;
  }

  //metodo que sirve para cambiar la foto que se ve de una prenda
  cambiarFoto(direccion: number) {
    const total = this.fotosPrenda.length;

    if (total === 0) return;

    //esta cuenta es para que cuando se llegue al final de las fotos vuelva al principio y viceversa
    this.indiceFoto = (this.indiceFoto + direccion + total) % total;
  }

  seleccionarFoto(indice: number) {
    this.indiceFoto = indice;
  }

  get marca(): string {
    const subtitulo = this.prenda?.subtitulo ?? '';

    return subtitulo.includes(' - ')
      ? subtitulo.split(' - ').pop() ?? ''
      : subtitulo;
  }

  get talla(): string {
    if (this.prenda?.talla) {
      return this.prenda.talla;
    }

    const subtitulo = this.prenda?.subtitulo ?? '';

    return subtitulo.includes(' - ')
      ? subtitulo.split(' - ')[0]
      : 'No indicada';
  }

  volver() {
    this.location.back();
  }

  mostrarAviso() {
    this.mensajeSolicitud = true;
  }

  abrirPerfil(nombre?: string) {
    if (!nombre) return;

    this.router.navigate(['/tabs/perfilusuarios', nombre]);
  }

  get perfilVendedor() {
    return PERFILESUSUARIOS.find(
      usuario => usuario.nombre === this.prenda?.propietario.nombre
    );
  }
}
