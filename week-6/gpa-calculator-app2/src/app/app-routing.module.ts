/*
============================================
; Title: app-routing.module.ts
; Author: Angel Padilla
; Date: 16 Aug 2020
; Modified By:
; Description: Routing module - this is what angular uses for navigation including for children routing
;===========================================
*/

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BaseLayoutComponent } from './base-layout/base-layout.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [{ path: '', component: HomeComponent }],
  },
  {
    path: 'session',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'not-found',
        component: NotFoundComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'session/not-found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
