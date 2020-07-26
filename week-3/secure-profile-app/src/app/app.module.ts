import { RouterModule } from '@angular/router';
/*
============================================
Title: app.module.ts
Author: Professor Krasso
Date: 25 July 2020
Modified by: Angel Padilla
Description: app module declares and imports all the components it needs
============================================
*/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyImageComponent } from './my-image/my-image.component';
import { MyDetailsComponent } from './my-details/my-details.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { AppRoutes } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    MyImageComponent,
    MyDetailsComponent,
    SignInComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(AppRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
