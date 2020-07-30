import { ComposerService } from './../composer.service';
/*
============================================
Title: composer.component.ts
Author: Professor Krasso
Date: 30 July 2020
Modified by: Angel Padilla
Description: Generates table with composers from the composer service and using its method getComposers()
============================================
*/

import { Component, OnInit } from '@angular/core';
import { IComposer } from './../composer.interface';

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css'],
})
export class ComposerListComponent implements OnInit {

  composers: Array<IComposer>;

  constructor(private composerService: ComposerService) {
    this.composers = this.composerService.getComposers();
  }

  ngOnInit(): void {}
}
