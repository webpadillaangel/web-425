/*
============================================
; Title: app-routing.component.ts
; Author: Angel Padilla
; Date: 06 Sept 2020
; Modified By:
; Description: routing component
;===========================================
*/

import { HomeComponent } from './home/home.component';
import { BaseLayoutComponent } from './base-layout/base-layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [{ path: '', component: HomeComponent }],
  },
  {
    path: 'sign-in',
    component: SignInComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
