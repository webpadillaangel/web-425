/*
============================================
Title: app.routing.ts
Author: Professor Krasso
Date: 25 July 2020
Modified by: Angel Padilla
Description: Routing component routes to the sign in page is route is empty and to home component if its in the url path '/home'
============================================
*/

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: SignInComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
];
