/*
============================================
; Title: book.service.ts
; Author: Professor Krasso
; Date: 08 Aug 2020
; Modified By: Angel Padilla
; Description: Book service
;===========================================
*/

import { Injectable } from '@angular/core';
import { IBook } from './book.interface';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  books: Array<IBook>;

  constructor() {
    this.books = [
      {
        isbn: '9780679745587',
        title: 'In Cold Blood',
        description:
          'Based on a true story in Kansas, a farm family gets murdered by thieves seeking money.',
        numOfPages: 368,
        authors: ['Truman Capote'],
      },
      {
        isbn: '9780451134516',
        title: 'Other Voices Other Rooms',
        description:
          'Young boy is abandoned by father when born, and develops strange and abnormal hobbies.',
        numOfPages: 200,
        authors: ['Truman Capote'],
      },
      {
        isbn: '9780590353427',
        title: "Harry Potter and the Sorcerer's Stone",
        description:
          'Harry Potter lives a hard life with the Dursleys and eventually learns there is more to his life with magic.',
        numOfPages: 320,
        authors: ['J. K. Rowling', 'Mary GrandPré (Illustrator)'],
      },
      {
        isbn: '9780439064873',
        title: 'Harry Potter and the Chamber of Secrets',
        description:
          "Harry returns home with the Dursleys for the summer but family is still mean to him and doesn't want him to return to Hogwarts. Dobby says Harry needs to return or disaster will occur.",
        numOfPages: 352,
        authors: ['J. K. Rowling', 'Mary GrandPré (Illustrator)'],
      },
      {
        isbn: '9780439136365',
        title: 'Harry Potter and the Prisoner of Azkaban',
        description:
          'Things appear to get difficult for Harry while he tries to avoid Sirius Black whom has it out for Harry since he knows Harry has something special.',
        numOfPages: 448,
        authors: ['J. K. Rowling', 'Mary GrandPré (Illustrator)'],
      },
    ];
  }

  getBooks(): Observable<IBook[]> {
    return of(this.books);
  }

  getBook(isbn: string): IBook {
    for (let book of this.books) {
      if (book.isbn === isbn) {
        return book;
      }
    }
  }
}
