/*
============================================
; Title: about.component.ts
; Author: Angel Padilla
; Date: 17 July 2020
; Modified By:
; Description: This about component will display when hit directly via URL /about or by clicking on the home navbar link.
;===========================================
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
