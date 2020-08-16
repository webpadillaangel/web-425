/*
============================================
; Title: home.component.module.ts
; Author: Professor Krasso
; Date: 16 Aug 2020
; Modified By: Angel Padilla
; Description: basic home component
;===========================================
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
