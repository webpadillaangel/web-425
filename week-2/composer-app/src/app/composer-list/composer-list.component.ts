/*
============================================
Title: composer.component.ts
Author: Professor Krasso
Date: 19 July 2020
Modified by: Angel Padilla
Description: Generates table with composers using the array of composers variable
============================================
*/

import { Component, OnInit } from '@angular/core';

export default class Composer {
  fullName: string;
  genre: string;

  // mapping the values to the composer properties
  constructor(fullName: string, genre: string) {
    this.fullName = fullName;
    this.genre = genre;
  }
}

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css'],
})
export class ComposerListComponent implements OnInit {
  composers: Array<Composer>;

  constructor() {
    // initializing the array of composers
    this.composers = [
      new Composer('Franc Liszt', 'Classical'),
      new Composer('Ludwig Van Beethoven', 'Classical'),
      new Composer('Johan Sebastian Bach', 'Classical'),
      new Composer('Johannes Brahms', 'Classical'),
      new Composer('Joseph Haydn', 'Classical'),
    ];
  }

  ngOnInit(): void {}
}
