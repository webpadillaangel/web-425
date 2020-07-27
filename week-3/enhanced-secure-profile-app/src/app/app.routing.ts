/*
============================================
Title: app.routing.ts
Author: Professor Krasso
Date: 26 July 2020
Modified by: Angel Padilla
Description: Routing component routes to the sign in page is route is empty and to home component if its in the url path '/home'. Home component is using the CanActivate Guard from the SignInComponent
============================================
*/

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignInGuard } from './sign-in.guard';

export const AppRoutes: Routes = [
  {
    path: '',
    component: SignInComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [SignInGuard],
  },
];
