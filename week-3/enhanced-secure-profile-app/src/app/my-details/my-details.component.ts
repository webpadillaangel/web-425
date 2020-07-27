/*
============================================
Title: my-details.component.ts
Author: Professor Krasso
Date: 26 July 2020
Modified by: Angel Padilla
Description: My details component is used to show how Data binding works by creating a class object, assigning values, and showing those values on the html template.
============================================
*/

import { Component, OnInit } from '@angular/core';

export default class Person {
  fullName: string;
  favoriteFood: string;
  favoriteColor: string;
  keyWords = ['#TypeScript', '#2020', '#CodingWithAngular', '#ngOmaha'];

  constructor(fullName: string, favoriteFood: string, favoriteColor: string) {
    this.fullName = fullName;
    this.favoriteFood = favoriteFood;
    this.favoriteColor = favoriteColor;
  }

  // toString() - outputs the contents of the class
  toString() {
    console.log(
      `\n Full name: ${this.fullName}\n Favorite food: ${this.favoriteFood}\n Favorite color: ${this.favoriteColor}`
    );
  }
}

@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css'],
})
export class MyDetailsComponent implements OnInit {
  myProfile: Person;

  constructor() {
    this.myProfile = new Person('Angel Padilla', 'Pizza', 'Blue');
    this.myProfile.toString();
  }

  ngOnInit(): void {}
}
