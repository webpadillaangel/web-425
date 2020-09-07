/*
============================================
; Title: auth.service.ts
; Author: Angel Padilla
; Date: 06 Sept 2020
; Modified By:
; Description: auth service that authenticates if user is an employee.
;===========================================
*/

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  employeeIds: Array<number>;
  isSignedIn: boolean = false;
  constructor() {
    this.employeeIds = [123456, 245678, 345678, 456789, 567890];
  }

  authenticate(employeeId) {
    if (this.employeeIds.some((id) => employeeId === id)) {
      this.isSignedIn = true;
      return true;
    } else {
      this.isSignedIn = false;
      return false;
    }
  }
}
