import { RepairServices } from './../base-layout/repair-services.model';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-computer-services-form',
  templateUrl: './computer-services-form.component.html',
  styleUrls: ['./computer-services-form.component.scss'],
})
export class ComputerServicesFormComponent implements OnInit {
  repairForm: FormGroup;
  servicesList = [
    { serviceName: 'Password Reset', price: 39.99 },
    { serviceName: 'Spyware Removal', price: 99.99 },
    { serviceName: 'Ram Upgrade', price: 129.99 },
    { serviceName: 'Software Installation', price: 49.99 },
    { serviceName: 'Tune Up', price: 89.99 },
    { serviceName: 'Keyboard Cleaning', price: 45 },
    { serviceName: 'Disk CleanUp', price: 149.99 },
  ];

  get repairFormArray() {
    return this.repairForm.controls.repairOptions as FormArray;
  }

  constructor(private fb: FormBuilder) {
    this.repairForm = this.fb.group({
      repairOptions: new FormArray([]),
    });

    this.generateMaterialCheckboxes();
  }

  private generateMaterialCheckboxes() {
    this.servicesList.forEach(() =>
      this.repairFormArray.push(new FormControl(false))
    );
  }

  displayedColumns: string[] = ['Service', 'Price'];

  ngOnInit(): void {}

  submit() {}
}
