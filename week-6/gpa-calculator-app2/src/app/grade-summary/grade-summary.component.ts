/*
============================================
; Title: grade-summary.component.ts
; Author: Angel Padilla
; Date: 16 Aug 2020
; Modified By:
; Description: Grade summary component receives data and renders it on the page. It can receive a grade and course to display on Transcript side
;===========================================
*/

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grade-summary',
  templateUrl: './grade-summary.component.html',
  styleUrls: ['./grade-summary.component.scss'],
})
export class GradeSummaryComponent implements OnInit {
  @Input() grade: string;
  @Input() course: string;

  constructor() {}

  ngOnInit(): void {}
}
