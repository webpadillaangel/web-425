/*
============================================
Title: app.component.ts
Author: Professor Krasso
Date: 2 August 2020
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
  assignment = 'Assignment 4.4 - Async Pipe';
}
