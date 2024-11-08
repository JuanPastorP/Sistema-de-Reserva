import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';  // Importa Router

@Component({
  selector: 'app-login',
  standalone: true, 
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule]  // Asegúrate de importar FormsModule aquí
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  validEmail: string = 'test@test.com';
  validPassword: string = 'password';

  constructor(private router: Router) {}  // Inyecta Router en el constructor

  onSubmit() {
    if (this.email === this.validEmail && this.password === this.validPassword) {
      alert('Login exitoso');
      this.errorMessage = '';
      this.router.navigate(['/reservas']);  // Redirige a /reservas
    } else {
      this.errorMessage = 'Correo electrónico o contraseña incorrectos';
    }
  }
}