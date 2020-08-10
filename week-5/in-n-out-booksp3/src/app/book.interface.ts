/*
============================================
; Title: book.interface.ts
; Author: Angel Padilla
; Date: 09 Aug 2020
; Modified By:
; Description: book interface
;===========================================
*/

export interface IBook {
  isbn: string;
  title: string;
  description: string;
  numOfPages: number;
  authors: Array<string>;
}
