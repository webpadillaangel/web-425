/*
============================================
; Title: contact.component.ts
; Author: Angel Padilla
; Date: 17 July 2020
; Modified By:
; Description: This contact component will display when hit directly via URL /contact or by clicking on the contact navbar link.
;===========================================
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
