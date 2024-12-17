import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { hasEmailError, isRequired } from '../../utils/valideitors';
import { AuthService } from '../../data-access/auth.service';
import { toast } from 'ngx-sonner';
import { GoogleButtonComponent } from '../../iu/google-button/google-button.component';

interface formRegIster{
  name: FormControl<string | null>;
  apell: FormControl<string | null>;
  email: FormControl<string | null>;
  password: FormControl<string | null>;
  confirmpassword: FormControl<string | null>;
}

@Component({
  selector: 'app-reg-ister',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink, GoogleButtonComponent],
  templateUrl: './reg-ister.component.html',
  styleUrls: ['./reg-ister.component.css']
})
export default class RegisterComponent {
  private _authService = inject(AuthService);
  private _router = inject(Router);
  private _formBuilder = inject(FormBuilder);

  form = this._formBuilder.group<formRegIster>({
    name: this._formBuilder.control('', [Validators.required]),
    apell: this._formBuilder.control('', [Validators.required]),
    email: this._formBuilder.control('', [Validators.required, Validators.email]),
    password: this._formBuilder.control('', [Validators.required]),
    confirmpassword: this._formBuilder.control('', [Validators.required])
  });

  errorMessage: string = '';

  isRequired(field: 'email' | 'password') {
    return isRequired(field, this.form);
  }

  hasEmailError() {
    return hasEmailError(this.form);
  }

  async Submit() {
    if (this.form.invalid) return; 

    const { name, apell, email, password, confirmpassword } = this.form.value;

    if (!email || !password || !name || !apell || !confirmpassword) return;

    
    if (password !== confirmpassword) {
      this.errorMessage = 'Las contraseñas no coinciden';
      return;
    }

    this.errorMessage = ''; 

    try {
      await this._authService.signUp({ email, password });

      toast.success('Usuario creado correctamente');
      this._router.navigateByUrl('/tasks'); 
    } catch (error) {
      toast.error('Ocurrió un error');
    }
  }

  async submitWithGoogle() {
    try {
      await this._authService.signInWithGoogle();
      toast.success('Bienvenido de nuevo');
      this._router.navigateByUrl('/tasks');
    } catch (error) {
      toast.error('Ocurrió un error');
    }
  }
}
