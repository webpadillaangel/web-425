import { BooksService } from './../books.service';
/*
============================================
; Title: book-list.component.ts
; Author: Professor Krasso
; Date: 08 Aug 2020
; Modified By: Angel Padilla
; Description: book list component - calls book service to retrieve list of books and displays them in table
;===========================================
*/

import { Component, OnInit } from '@angular/core';
import { IBook } from './../book.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  books: Observable<IBook[]>;
  header: Array<string> = ['isbn', 'title', 'numOfPages', 'authors'];
  book: IBook;

  constructor(private booksService: BooksService) {
    this.books = this.booksService.getBooks();
  }

  ngOnInit(): void {}

  showBookDetails(isbn: string) {
    this.book = this.booksService.getBook(isbn);
    console.log(this.book);
  }
}
