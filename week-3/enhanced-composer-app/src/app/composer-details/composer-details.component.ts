/*
============================================
Title: composer.component.ts
Author: Professor Krasso
Date: 24 July 2020
Modified by: Angel Padilla
Description: Gets the router parameter being the composer id when the component is initialized, use that id to find its matching id and display the requested composer information
============================================
*/


import { Component, OnInit } from '@angular/core';
import { Composer } from './../composer.class';
import { IComposer } from './../composer.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-composer-details',
  templateUrl: './composer-details.component.html',
  styleUrls: ['./composer-details.component.css'],
})
export class ComposerDetailsComponent implements OnInit {
  composerId: number;
  composer: IComposer;

  constructor(private route: ActivatedRoute) {
    this.composerId = parseInt(
      this.route.snapshot.paramMap.get('composerId'),
      10
    );

    if (this.composerId) {
      this.composer = new Composer().getComposer(this.composerId);
    }
  }

  ngOnInit(): void {}
}
