import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../data-access/auth.service';
import { toast } from 'ngx-sonner';
import { GoogleButtonComponent } from '../../iu/google-button/google-button.component';

interface formLoGin {
  email: FormControl<string | null>;
  password: FormControl<string | null>;
 }

@Component({
  selector: 'app-lo-gin',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule, RouterLink, GoogleButtonComponent, ],
  templateUrl: './lo-gin.component.html',
  styleUrls: ['./lo-gin.component.css'],
  providers: []
})
export default class LoginComponent {
  private _authService = inject(AuthService);
  private _router = inject(Router);
  private _FormBuilder= inject(FormBuilder);
  form = this._FormBuilder.group<formLoGin>({
  email: this._FormBuilder.control('',[Validators.required, Validators.email]),
  password: this._FormBuilder.control('',[Validators.required]),
  });

  async Submit() {
    if (this.form.invalid) return;

    const { email, password } = this.form.value;

    console.log('Datos del formulario:', { email, password });
     
    
    if(this.form.invalid) return;
    try {
      const{ email, password } = this.form.value;
      if ( !email || !password ) return;

      await this._authService.signIn ({ email, password});
      toast.success('hola de nuevo');
      this._router.navigateByUrl('/tasks');
      } catch (error){
        toast.error('ocurrio un error');
      }

  }
  async submitWithGoogle() {
    try {
      await this._authService.signInWithGoogle();
      toast.success('Bienvenido denuevo');
      this._router.navigateByUrl('/tasks');
    } catch (error) {
      toast.error('Ocurrio un error');
    }
  }

}
  