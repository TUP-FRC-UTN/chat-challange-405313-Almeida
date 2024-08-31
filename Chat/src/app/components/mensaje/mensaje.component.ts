import { Component, EventEmitter, Input } from '@angular/core';
import { SalaComponent } from '../sala/sala.component';
import { Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Mensajes } from '../../models/mensajes';

@Component({
  selector: 'app-mensaje',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './mensaje.component.html',
  styleUrl: './mensaje.component.css'
})
export class MensajeComponent {
  @Output() mensajeEnviado = new EventEmitter<Mensajes>();
  @Input() usuario: string = "1";

  mensaje: Mensajes = { Usuario: this.usuario, Mensaje: "" }

  onSendMessage() {
    let nuevoMensaje: Mensajes = { Usuario: this.usuario, Mensaje: this.mensaje.Mensaje };

    this.mensajeEnviado.emit(nuevoMensaje);
    this.mensaje.Mensaje = "";
  }

}
