/*
============================================
Title: sign-in.guard.ts
Author: Professor Krasso
Date: 26 July 2020
Modified by: Angel Padilla
Description: SignIn guard used to control access
============================================
*/

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router'; // included the Router here instead of creating another import statement.
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignInGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      let isLoggedIn = next.queryParams.isLoggedIn;

      if (isLoggedIn) {
        return true;
      } else {
        this.router.navigate(['/']);
        return false;
      }
  }

}
