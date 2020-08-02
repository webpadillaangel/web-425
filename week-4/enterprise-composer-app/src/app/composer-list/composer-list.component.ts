/*
============================================
Title: composer.component.ts
Author: Professor Krasso
Date: 2 August 2020
Modified by: Angel Padilla
Description: Generates table with composers from the composer service and using its method getComposers() and filters composers on input changes
============================================
*/

import { Component, OnInit } from '@angular/core';
import { IComposer } from './../composer.interface';
import { ComposerService } from './../composer.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css'],
})
export class ComposerListComponent implements OnInit {

  composers: Observable<IComposer[]>;
  txtSearchControl = new FormControl('');

  constructor(private composerService: ComposerService) {
    this.composers = this.composerService.getComposers();

    this.txtSearchControl.valueChanges.pipe(debounceTime(500)).subscribe(val => this.filterComposers(val));
  }

  ngOnInit(): void {}

  filterComposers(name: string) {
    this.composers = this.composerService.filterComposers(name);
  }

}
