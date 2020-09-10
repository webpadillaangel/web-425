/*
============================================
; Title: services-modal.component.ts
; Author: Angel Padilla
; Date: 06 Sept 2020
; Modified By:
; Description: This modal renders the sum total and displays all the items selected.
;===========================================
*/

import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IServicesList } from '../services-list.interface';
import { IStandardFees } from './../standard-fees.interface';

@Component({
  selector: 'app-services-modal',
  templateUrl: './services-modal.component.html',
  styleUrls: ['./services-modal.component.scss'],
})
export class ServicesModalComponent implements OnInit {
  servicesList: IServicesList[] = [];
  additionalServices: IStandardFees;
  servicesSum: number;
  feesSum: number;
  grandTotal: number;

  constructor(
    private dialogRef: MatDialogRef<ServicesModalComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.servicesList = data.servicesList;
    this.additionalServices = data.additionalFees;
    this.sumServicesList(this.servicesList);
    this.sumAdditionalServices(this.additionalServices);
    this.sumGrandTotal(this.servicesSum, this.feesSum);
  }

  // sums up all the items passed in from the home component
  sumServicesList(servicesList) {
    let sum = 0;
    servicesList.forEach((element) => {
      sum = sum + element.price;
    });

    this.servicesSum = sum;
  }

  // sums up the additional fees passed in.
  sumAdditionalServices(additionalServices) {
    let sum = 0;
    let partCost =
      additionalServices.partCost && additionalServices > 0
        ? additionalServices.partCost
        : 0;
    let hours =
      (additionalServices.hours && additionalServices.hours) > 0
        ? additionalServices.hours
        : 0;

    if (partCost > 0) {
      sum = additionalServices.partCost;
    }
    if (hours > 1) {
      let multiply = additionalServices.hours * 50;
      sum = sum + multiply
    }
    if (hours <= 1) {
      sum = sum + 50;
    }

    this.feesSum = sum;
  }

  // sums up everything by adding the services and additional fees
  sumGrandTotal(servicesSum, feesSum) {
    this.grandTotal = servicesSum + feesSum;
  }

  onDismiss() {
    this.dialogRef.close();
  }

  ngOnInit(): void {}
}
