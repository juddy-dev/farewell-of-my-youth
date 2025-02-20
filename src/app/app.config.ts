import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { environment } from '../environments/environment.development';
import { BookService } from './services/book.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    BookService,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideDatabase(() => getDatabase())

  ]
};
