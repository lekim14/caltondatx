import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { providePrimeNG } from 'primeng/config';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideAnimationsAsync(),
    provideAnimations(),
    providePrimeNG({
      theme: {
        //   preset: Material,
        //   options: {
        //     cssLayer: {
        //         name: 'primeng',
        //         order: 'tailwind-base, primeng, tailwind-utilities'
        //     }
        // }
      },
      
    }),
    provideHttpClient()
  ],
};