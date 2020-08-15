/*
============================================
; Title: app.component.ts
; Author: Professor Krasso
; Date: 14 Aug 2020
; Modified By: Angel Padilla
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
    this.assignment = 'Exercise 6.2 - Input/Output Properties, Part 1';
  }
}
