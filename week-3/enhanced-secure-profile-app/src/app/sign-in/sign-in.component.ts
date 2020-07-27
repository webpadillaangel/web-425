/*
============================================
Title: sign-in.component.ts
Author: Professor Krasso
Date: 26 July 2020
Modified by: Angel Padilla
Description: Sign In page with logic that has a signIn function to update the isLoggedIn variable which is used in the Sign In Guard to allow access to the home component.
============================================
*/

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  isLoggedIn = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  // signIn function is triggered by click event
  signIn() {
    this.isLoggedIn = true;

    this.router.navigate(['/home'], {
      queryParams: { isLoggedIn: this.isLoggedIn },
      skipLocationChange: true,
    });
  }
}
