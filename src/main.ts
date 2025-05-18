import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

import { environment } from './environments/environment';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideAuth, getAuth } from '@angular/fire/auth';

// Egyesítjük az appConfig és Firebase providereket
bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    ...appConfig.providers || [], // fontos, hogy ne veszítsük el az appConfig meglévő providereit
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth())
  ]
}).catch((err) => console.error(err));
