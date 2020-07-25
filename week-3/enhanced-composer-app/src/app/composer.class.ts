/*
============================================
Title: composer.class.ts
Author: Professor Krasso
Date: 24 July 2020
Modified by: Angel Padilla
Description: composer class with two methods that return a list of composers or just one composer
============================================
*/

import { IComposer } from './composer.interface';

export class Composer {
  composers: Array<IComposer>;

  constructor() {
    // initializing the array of composers
    this.composers = [
      {
        composerId: 100,
        fullName: 'Franc Liszt',
        genre: 'Classical',
      },
      {
        composerId: 101,
        fullName: 'Ludwig Van Beethoven',
        genre: 'Classical',
      },
      {
        composerId: 102,
        fullName: 'Johann Sebastian Bach',
        genre: 'Classical',
      },
      {
        composerId: 103,
        fullName: 'Johannes Brahms',
        genre: 'Classical',
      },
      {
        composerId: 104,
        fullName: 'Joseph Haydn',
        genre: 'Classical',
      },
    ];
  }

  // returns a list of the composers
  getComposers() {
    return this.composers;
  }

  // returns one composer, by using the parameter composerId to find the requested composer.
  getComposer(composerId: number) {
    for (let composer of this.composers) {
      if (composer.composerId === composerId) {
        return composer;
      }
    }
  }
}
