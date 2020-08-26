/*
============================================
; Title: wishlist.component.ts
; Author: Professor Krasso
; Date: 25 Aug 2020
; Modified By: Angel Padilla
; Description: wishlist component displays a list of wishlist items received from the child component.
;===========================================
*/

import { Component, OnInit } from '@angular/core';
import { IWishlistItem } from "../wishlist-item.interface";

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  items: Array<IWishlistItem> = [];

  constructor() { }

  ngOnInit(): void {
  }

  updateItemsHandler(item: IWishlistItem){
    this.items.push(item);
  }

}
