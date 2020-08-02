/*
============================================
; Title: main.ts
; Author: Angel Padilla
; Date: 2 August 2020
; Modified By:
; Description: main.ts file is the first(main) entry point of the app.
;===========================================
*/

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
