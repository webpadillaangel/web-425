/*
============================================
; Title: sign-in.component.ts
; Author: Angel Padilla
; Date: 06 Sept 2020
; Modified By:
; Description: sign in component - employee ids to use: [123456, 245678, 345678, 456789, 567890]
;===========================================
*/

import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup;
  errorMessage: string;

  constructor(
    private router: Router,
    private auth: AuthService,
    private fb: FormBuilder
  ) {}

  onSignIn() {
    const formValues = this.signInForm.value;
    const employeeId = parseInt(formValues.employeeId);

    if(this.auth.authenticate(employeeId)){
      this.router.navigate(['/']);
    }else{
      this.errorMessage = 'Please try again. The Employee ID provided is not valid.'
    }
  }

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      employeeId: '',
    });
  }
}
