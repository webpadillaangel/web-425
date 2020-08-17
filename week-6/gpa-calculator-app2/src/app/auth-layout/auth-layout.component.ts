/*
============================================
; Title: auth-layout.component.ts
; Author: Angel Padilla
; Date: 16 Aug 2020
; Modified By:
; Description: auth layout has router outlet that any children routes will render page not found page
;===========================================
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss']
})
export class AuthLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
