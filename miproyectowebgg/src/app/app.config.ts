import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(), provideFirebaseApp(() => initializeApp({
    projectId:"miproyectowebgg",
    appId:"1:155897744383:web:e7e3ee8b8c559b478e35ca",
    storageBucket:"miproyectowebgg.firebasestorage.app",
    apiKey:"AIzaSyCS6HETOOOsI2FxDhNWu3KjdXRrcqceUu0",
    authDomain:"miproyectowebgg.firebaseapp.com",
    messagingSenderId:"155897744383"})), 
    provideAuth(() => getAuth()), provideFirestore(() => getFirestore())]
};
