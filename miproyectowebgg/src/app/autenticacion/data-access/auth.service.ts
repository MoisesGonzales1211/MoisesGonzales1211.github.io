import { inject, Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from '@angular/fire/auth';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { sendPasswordResetEmail } from '@angular/fire/auth';
import { toast } from 'ngx-sonner';

export interface User {
  email: string;
  password: string;
}


@Injectable({
  providedIn: 'root'
  
})
export class AuthService {
  async recoverPassword(email: string): Promise<void> {
    try {
      await sendPasswordResetEmail(this._auth, email);
      toast.success('Correo de recuperación enviado. Revisa tu bandeja de entrada.');
    } catch (error: any) {
      console.error('Error en recuperación de contraseña:', error);
      if (error.code === 'auth/user-not-found') {
        toast.error('El correo ingresado no está registrado.');
      } else {
        toast.error('Error al enviar el correo de recuperación. Intenta nuevamente.');
      }
    }
  }
  
  private _auth = inject(Auth);

  signUp ( user: User) {
    return createUserWithEmailAndPassword(
      this._auth,
      user.email,
      user.password

    );
  }
  signIn(user: User) {
    return signInWithEmailAndPassword(this._auth, user.email, user.password);
  }
  signInWithGoogle() {
    const provider = new GoogleAuthProvider();

    

    return signInWithPopup(this._auth, provider);
  }
  
}
