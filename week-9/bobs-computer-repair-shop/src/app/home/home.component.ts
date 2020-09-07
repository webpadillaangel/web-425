/*
============================================
; Title: home.component.ts
; Author: Angel Padilla
; Date: 06 Sept 2020
; Modified By:
; Description: this component holds the services component and the additional fees component. Authenticates to allow usability for the additional fees side if user is an employee
;===========================================
*/

import { AuthService } from './../auth.service';
import { MatDialog } from '@angular/material/dialog';
import { ServicesModalComponent } from './../services-modal/services-modal.component';
import { IStandardFees } from './../standard-fees.interface';
import { IServicesList } from './../services-list.interface';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title: string = "Bob's Computer Repair Shop";
  servicesList: IServicesList[] = [];
  additionalFees: IStandardFees;
  servicesError: string;
  feesError: string = '';
  isDisabled: boolean = true;
  get isAuthenticated() {
    return this.auth.isSignedIn;
  }

  constructor(private auth: AuthService, private dialog: MatDialog, private _snackBar: MatSnackBar, private router: Router,) {
    if (!this.isAuthenticated) {
      this.additionalFees = { partCost: 0, hours: 0 };
    }
  }

  ngOnInit(): void {}

  updateServicesSelected(selectedServices: IServicesList[]) {
    this.servicesList = selectedServices;
    this.isDisabled = false; // enabling the submit button once something gets checked.
    if (this.servicesList.length) {
      this.servicesError = '';
    } else {
      this.servicesError = 'Please select at lease one service from the list.';
    }
  }

  onAdditionalFeesAdded(feesData: IStandardFees) {
    this.additionalFees = feesData;
    // this is a failsafe for anything that comes in and isn't a number. by default if something isn't a number it will default to zero
    if (
      isNaN(this.additionalFees.hours) ||
      isNaN(this.additionalFees.partCost)
    ) {
      this.feesError =
        'Please enter a numerical value for Part Cost and Hours.';
    } else {
      this.feesError = '';
    }
  }

  showSummary() {
    const dialogRef = this.dialog.open(ServicesModalComponent, {
      data: {
        servicesList: this.servicesList,
        additionalFees: this.additionalFees,
      },
      disableClose: true,
      width: '600px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if(result === 'confirm'){
        this._snackBar.open('Submitted', 'Successful!', {
          duration: 5000,
        });
      }else{
        this._snackBar.open('Canceled', 'Successful!', {
          duration: 5000,
        });
      }
    });
  }
}
