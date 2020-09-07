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

  sumServicesList(servicesList) {
    let sum = 0;
    servicesList.forEach((element) => {
      sum = sum + element.price;
    });

    this.servicesSum = sum;
  }

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
    if (hours > 0) {
      sum = sum + additionalServices.hours * 50;
    }

    this.feesSum = sum;
  }

  sumGrandTotal(servicesSum, feesSum) {
    this.grandTotal = servicesSum + feesSum;
  }

  ngOnInit(): void {}
}
