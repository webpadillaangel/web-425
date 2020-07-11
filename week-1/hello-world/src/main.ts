/*
============================================
; Title: Assignment 1.3
; Author: Angular CLI Generated
; Date: 11 July 2020
; Modified By: Angel Padilla
; Description: application main.ts file
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
