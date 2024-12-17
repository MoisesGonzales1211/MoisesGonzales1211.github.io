import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../data-access/auth.service';
import { toast } from 'ngx-sonner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recover-password',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.css'],
})
export default class RecoverPasswordComponent {
  private _formBuilder = inject(FormBuilder);
  private _authService = inject(AuthService);

  constructor(private _router: Router) {}

  // Navegar al inicio de sesión
  goToSignIn() {
    this._router.navigate(['/autenticacion/lo-gin']);
  }

  // Definición del formulario
  form = this._formBuilder.group({
    email: this._formBuilder.control('', [Validators.required, Validators.email]),
  });

  // Método para manejar el envío del formulario
  async submit() {
    if (this.form.invalid) {
      toast.error('Por favor, ingresa un correo válido');
      return;
    }

    try {
      const email = this.form.value.email;
      if (!email) return;

      // Llamada al servicio para la recuperación de contraseña
      await this._authService.recoverPassword(email);
    } catch (error) {
      console.error('Error en submit:', error);
    }
  }
}
