/*
============================================
; Title: base-layout.component.ts
; Author: Angel Padilla
; Date: 16 Aug 2020
; Modified By:
; Description: base layout component displaying assignment name and router-outlet (will display child components including the HomeComponent)
;===========================================
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss'],
})
export class BaseLayoutComponent implements OnInit {
  assignment: string;

  constructor() {
    this.assignment = 'Assignment 6.4 - Input Properties';
  }

  ngOnInit(): void {}
}
