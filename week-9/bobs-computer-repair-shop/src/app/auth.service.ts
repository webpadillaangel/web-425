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
