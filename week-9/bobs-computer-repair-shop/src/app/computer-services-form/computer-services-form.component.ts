/*
============================================
; Title: computer-services-form.component.ts
; Author: Angel Padilla
; Date: 06 Sept 2020
; Modified By:
; Description: This component holds the checkbox list and emits the values up to the home component.
;===========================================
*/

import { IServicesList } from './../services-list.interface';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-computer-services-form',
  templateUrl: './computer-services-form.component.html',
  styleUrls: ['./computer-services-form.component.scss'],
})
export class ComputerServicesFormComponent implements OnInit {
  @Output() servicesEmitter = new EventEmitter<IServicesList[]>();

  repairForm: FormGroup;
  servicesList: IServicesList[] = [];
  selectedServicesList: [];

  get repairFormArray() {
    return this.repairForm.controls.repairOptions as FormArray;
  }

  constructor(private fb: FormBuilder) {
    // initializing the services list with static data
    this.servicesList = [
      { id: 0, serviceName: 'Password Reset', price: 39.99, checked: false },
      { id: 1, serviceName: 'Spyware Removal', price: 99.99, checked: false },
      { id: 2, serviceName: 'Ram Upgrade', price: 129.99, checked: false },
      {
        id: 3,
        serviceName: 'Software Installation',
        price: 49.99,
        checked: false,
      },
      { id: 4, serviceName: 'Tune Up', price: 89.99, checked: false },
      { id: 5, serviceName: 'Keyboard Cleaning', price: 45, checked: false },
      { id: 6, serviceName: 'Disk CleanUp', price: 149.99, checked: false },
    ];

    this.repairForm = this.fb.group({
      repairOptions: new FormArray([]),
    });

    this.generateMaterialCheckboxes();
  }

  // method to generate the checkboxes after the form builder group is created
  private generateMaterialCheckboxes() {
    this.servicesList.forEach(() =>
      this.repairFormArray.push(new FormControl(false))
    );
  }

  ngOnInit(): void {}

  onServiceChange() {
    // getting the values of the form, comes as an array
    const formValues = this.repairFormArray.value;
    // variable to hold the selected services data
    const selectedValues: IServicesList[] = [];

    // iterating to pull out the true values and pushing to selectedValues array
    this.servicesList.forEach((element, index) => {
      if (formValues[index] === true) {
        element.checked = true;
        selectedValues.push(element);
      }
    });

    // emitting the selected values back to the home component
    this.servicesEmitter.emit(selectedValues);
  }
}
