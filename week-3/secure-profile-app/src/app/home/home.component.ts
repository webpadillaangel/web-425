import { ActivatedRoute } from '@angular/router';
/*
============================================
Title: home.component.ts
Author: Professor Krasso
Date: 25 July 2020
Modified by: Angel Padilla
Description: This home component is the reroute component if a 'user is validated'
============================================
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  isLoggedIn: boolean;

  constructor(private route: ActivatedRoute) {
    this.isLoggedIn = Boolean(
      this.route.snapshot.queryParamMap.get('isLoggedIn')
    );
  }

  ngOnInit(): void {}
}
