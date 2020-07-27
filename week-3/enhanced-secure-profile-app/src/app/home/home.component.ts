/*
============================================
Title: home.component.ts
Author: Professor Krasso
Date: 26 July 2020
Modified by: Angel Padilla
Description: home component is guarded by the SignIn Guard using canActivate.
============================================
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
