import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';  // Importa CommonModule

@Component({
  selector: 'app-seleccionar-mesa',
  standalone: true,
  templateUrl: './seleccionar-mesa.component.html',
  styleUrls: ['./seleccionar-mesa.component.css'],
  imports: [CommonModule]  // Asegúrate de incluir CommonModule aquí
})
export class SeleccionarMesaComponent {
  mesasDisponibles: number[] = [1, 2, 3, 4, 5]; // Ejemplo de mesas disponibles
  mesaSeleccionada: number | null = null;

  constructor(private router: Router) {}

  seleccionarMesa(mesa: number) {
    this.mesaSeleccionada = mesa;
    alert(`Has seleccionado la mesa ${mesa}`);
  }

  confirmarReserva() {
    if (this.mesaSeleccionada === null) {
      alert('Por favor, selecciona una mesa.');
    } else {
      alert(`Reserva confirmada para la mesa ${this.mesaSeleccionada}`);
      alert(`Un correo de confirmación ha sido enviado a test@test.com`);

      // Aquí podrías redirigir a otro componente o mostrar un mensaje de confirmación
      // Por ejemplo: this.router.navigate(['/confirmacion']);
    }
  }
}