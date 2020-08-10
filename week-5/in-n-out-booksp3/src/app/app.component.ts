/*
============================================
; Title: app.component.ts
; Author: Angel Padilla
; Date: 09 Aug 2020
; Modified By:
; Description: app component - root component
;===========================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  assignment: string;

  constructor() {
    this.assignment = 'Assignment 5.4 - Dialogs';
  }
}
