/*
============================================
; Title: home.component.ts
; Author: Angel Padilla
; Date: 17 July 2020
; Modified By:
; Description: This home component will display when hit directly via URL /home or by clicking on the home navbar link.
;===========================================
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
