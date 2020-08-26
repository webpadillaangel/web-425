/*
============================================
; Title: book-list.component.ts
; Author: Professor Krasso
; Date: 25 Aug 2020
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
  books: Array<IBook> = [];
  book: IBook;
  // isLoading Variable to flag when service call is being done and complete
  isLoading: boolean = true;

  constructor(private booksService: BooksService, private dialog: MatDialog) {
    this.booksService.getBooks().subscribe((res) => {

      // update the isLoading value to true for loading to show
      this.isLoading = true;

      //logging 'res' result from the getBooks service method
      console.log(res);
      for (let key in res) {
        if (res.hasOwnProperty(key)) {
          let authors = [];
          if (res[key].details.authors) {
            authors = res[key].details.authors.map(function (author) {
              return author.name;
            });
          }

          this.books.push({
            isbn: res[key].details.isbn_13
              ? res[key].details.isbn_13
              : res[key].details.isbn_10,
            title: res[key].details.title,
            description: res[key].details.subtitle
              ? res[key].details.subtitle
              : 'N/A',
            numOfPages: res[key].details.number_of_pages,
            authors: authors,
          });
        }
      }
      // update the isLoading value to false since the for loop is done hence the call is complete
      this.isLoading = false;
    });
  }

  ngOnInit(): void {}

  showBookDetails(isbn: string) {
    this.book = this.books.find((book) => book.isbn === isbn);

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
