import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';  // Importa Router
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  // Importa CommonModule



@Component({
  selector: 'app-reservas',
  standalone: true,
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css'],
  imports: [FormsModule, RouterModule, CommonModule, ]
})
export class ReservasComponent {
  title: string = 'Haz tu reserva de mesa';
  nombre: string = '';
  fecha: string = '';
  hora: string = '';
  numeroPago: string = '';  // Número de pago
  errorMessage: string = '';  // Mensaje de error
  validPago: string = '1234567890';  // Número de pago predefinido
  mesaSeleccionada: string = ''; // Guardará la mesa seleccionada
  cancelando: boolean = false;  // Indica si estamos en modo cancelación
  errorCancelacion: string = '';  // Error de cancelación si el pago no es correcto

  constructor(private router: Router) {}

  // Método que se ejecuta al enviar el formulario
  onSubmit() {
    this.errorMessage = '';

    if (!this.numeroPago) {
      this.errorMessage = 'El número de pago no puede estar vacío.';
    } else if (this.numeroPago !== this.validPago) {
      this.errorMessage = 'El número de pago es incorrecto. Por favor, ingresa el número correcto.';
    } else {
      this.mesaSeleccionada = 'Mesa 1';  // Aquí deberías usar tu lógica para seleccionar la mesa
      alert(`Reserva confirmada para la mesa ${this.mesaSeleccionada}`);
      
      // Simulamos el envío de un correo de confirmación
      alert(`Un correo de confirmación ha sido enviado a test@test.com`);

      // Redirigir al componente de selección de mesa o cualquier otro componente
      this.router.navigate(['/seleccionar-mesa']);
    }
  }

  // Activar modo cancelación
  cancelarReserva() {
    this.cancelando = true;
    this.errorCancelacion = '';  // Reiniciar el error
  }

  // Método para validar la cancelación de la reserva
  confirmarCancelacion() {
    if (this.numeroPago !== this.validPago) {
      this.errorCancelacion = 'El número de pago es incorrecto. No se puede cancelar la reserva.';
    } else {
      alert('Tu reserva ha sido cancelada.');
      this.cancelando = false;  // Salir del modo cancelación
      this.limpiarFormulario();  // Limpiar los datos
    }
  }

  // Limpiar los datos del formulario
  limpiarFormulario() {
    this.nombre = '';
    this.fecha = '';
    this.hora = '';
    this.numeroPago = '';
    this.errorMessage = '';
  }
}
