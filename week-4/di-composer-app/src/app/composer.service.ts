/*
============================================
Title: composer.service.ts
Author: Professor Krasso
Date: 30 July 2020
Modified by: Angel Padilla
Description: Composer service provides the composer information and two methods to components that user this service.
============================================
*/


import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';

@Injectable({
  providedIn: 'root'
})
export class ComposerService {

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
