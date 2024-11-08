import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';  // Importa el componente de login
import { ReservasComponent } from './reservas/reservas.component';  // Ajusta las rutas según tu estructura
import { SeleccionarMesaComponent } from './seleccionar-mesa/seleccionar-mesa.component';



export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },  // Redirige a login si la ruta está vacía
  { path: 'reservas', component: ReservasComponent },
  { path: 'seleccionar-mesa', component: SeleccionarMesaComponent },

];