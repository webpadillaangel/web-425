/*
============================================
; Title: app.component.ts
; Author: Angel Padilla
; Date: 12 July 2020
; Modified By:
; Description: root app component that defines the core information. Selector, template url, styles.
;===========================================
*/
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // variable used in the app.component.html
  assignment: string = 'Assignment 1.5 - Components';
}
