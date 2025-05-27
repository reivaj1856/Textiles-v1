import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'textiles-bd1fa',
        appId: '1:759843011545:web:c130282f540566525437c8',
        storageBucket: "textiles-bd1fa.appspot.com",
        apiKey: 'AIzaSyD9tFTu_h0ccPCsxCVYu68NfF-pIA-gvkI',
        authDomain: 'textiles-bd1fa.firebaseapp.com',
        messagingSenderId: '759843011545',
      })
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
};
