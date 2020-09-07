import { AuthService } from './../auth.service';
import { MatDialog } from '@angular/material/dialog';
import { ServicesModalComponent } from './../services-modal/services-modal.component';
import { IStandardFees } from './../standard-fees.interface';
import { IServicesList } from './../services-list.interface';
import { FormGroup, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

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
  feesError: string;
  isDisabled: boolean = true;
  get isAuthenticated() {
    return this.auth.isSignedIn;
  }

  constructor(private auth: AuthService, private dialog: MatDialog) {
    if(!this.isAuthenticated){
      this.additionalFees = {partCost: 0, hours: 0};
    }
  }

  ngOnInit(): void {}

  updateServicesSelected(selectedServices: IServicesList[]) {
    this.servicesList = selectedServices;
    this.isDisabled = false;
    if (this.servicesList.length) {
      this.servicesError = '';
    } else {
      this.servicesError = 'Please select at lease one service from the list.';
    }
  }

  onAdditionalFeesAdded(feesData: IStandardFees) {
    this.additionalFees = feesData;
    this.isDisabled = false;
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
      if (result === 'confirm') {
        console.log('inside confirm');
      } else {
        console.log('outside confirm');
      }
    });
  }
}
