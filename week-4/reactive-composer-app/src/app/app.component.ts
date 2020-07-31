/*
============================================
Title: app.component.ts
Author: Professor Krasso
Date: 31 July 2020
Modified by: Angel Padilla
Description: app component - main component
============================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  assignment = 'Exercise 4.3 - Handling Events with Observables';
}
