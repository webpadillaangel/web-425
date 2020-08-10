/*
============================================
; Title: book-list.component.ts
; Author: Angel Padilla
; Date: 09 Aug 2020
; Modified By: Angel Padilla
; Description: book list component - calls book service to retrieve list of books and displays them in table
;===========================================
*/

import { Component, OnInit } from '@angular/core';
import { IBook } from './../book.interface';
import { Observable } from 'rxjs';
import { BookDetailsDialogComponent } from './../book-details-dialog/book-details-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { BooksService } from './../books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit {
  books: Observable<IBook[]>;
  header: Array<string> = ['isbn', 'title', 'numOfPages', 'authors'];
  book: IBook;

  constructor(private booksService: BooksService, private dialog: MatDialog) {
    this.books = this.booksService.getBooks();
  }

  ngOnInit(): void {}

  showBookDetails(isbn: string) {
    this.book = this.booksService.getBook(isbn);

    const dialogRef = this.dialog.open(BookDetailsDialogComponent, {
      data: {
        book: this.book,
      },
      disableClose: true,
      width: '800px',
    });

    console.log(this.book);

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'confirm') {
        this.book = null;
      }
    });
  }
}
