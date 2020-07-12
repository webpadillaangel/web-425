/*
============================================
; Title: person.class.ts
; Author: Angel Padilla
; Date: 12 July 2020
; Modified By: 
; Description: Person class file the implements person interface.
;===========================================
*/

import { IPerson } from "./person.interface";

class Person implements IPerson {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

let myName = new Person("Angel", "Padilla");

console.log(`My name is ${myName.firstName} ${myName.lastName}`);
