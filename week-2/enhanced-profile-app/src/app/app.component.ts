/*
============================================
Title: app.component.ts
Author: Professor Krasso
Date: 19 July 2020
Modified by: Angel Padilla
Description: This component uses a boolean variable to do a test case for an ngIf directive and display a template based on the isLogged in variable.
============================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  assignment: string = 'Exercise 2.3 - Data Binding';
  isLoggedIn: boolean = true;
}
