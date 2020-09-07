/*
============================================
; Title: base-layout.component.ts
; Author: Angel Padilla
; Date: 06 Sept 2020
; Modified By:
; Description: Base layout component functions as the root and routes to where needed
;===========================================
*/

import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss'],
})
export class BaseLayoutComponent implements OnInit {

  constructor(private auth: AuthService, private _snackBar: MatSnackBar) {}

  get isAuthenticated() {
    return this.auth.isSignedIn;
  }

  onSignOut() {
    this.auth.isSignedIn = false;
    this._snackBar.open('Signed Out!', 'Successful!', {
      duration: 5000,
    });
  }

  ngOnInit(): void {}
}
