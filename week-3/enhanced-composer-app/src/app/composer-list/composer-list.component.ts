/*
============================================
Title: composer.component.ts
Author: Professor Krasso
Date: 24 July 2020
Modified by: Angel Padilla
Description: Generates table with composers from the composers class and using its method getComposers()
============================================
*/

import { Component, OnInit } from '@angular/core';
import { IComposer } from './../composer.interface';
import { Composer } from './../composer.class';

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css'],
})
export class ComposerListComponent implements OnInit {

  composers: Array<IComposer>;

  constructor() {
    this.composers = new Composer().getComposers();
  }

  ngOnInit(): void {}
}
