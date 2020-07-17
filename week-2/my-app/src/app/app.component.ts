/*
============================================
; Title: app.component.ts
; Author: Angel Padilla
; Date: 17 July 2020
; Modified By:
; Description: The app component is the root of the application.
;===========================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
}
