import { Component } from '@angular/core';
import { MensajeComponent } from '../mensaje/mensaje.component';
import { NgFor, NgStyle } from '@angular/common';
import { Mensajes } from '../../models/mensajes';

@Component({
  selector: 'app-sala',
  standalone: true,
  imports: [MensajeComponent, NgFor, NgStyle],
  templateUrl: './sala.component.html',
  styleUrl: './sala.component.css'
})
export class SalaComponent {
  mensajes: Mensajes[] = [];
  agregarConversacion(mensaje: Mensajes) {
    this.mensajes.push(mensaje);
    console.log(this.mensajes);
  }
}
