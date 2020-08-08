/*
============================================
; Title: book.interface.ts
; Author: Professor Krasso
; Date: 06 Aug 2020
; Modified By: Angel Padilla
; Description: book interface.
;===========================================
*/

export interface IBook {
  isbn: string;
  title: string;
  description: string;
  numOfPages: number;
  authors: Array<string>;
}
