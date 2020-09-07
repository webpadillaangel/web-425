import { IStandardFees } from './../standard-fees.interface';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from './../auth.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-standard-fees',
  templateUrl: './standard-fees.component.html',
  styleUrls: ['./standard-fees.component.scss'],
})
export class StandardFeesComponent implements OnInit {
  @Output() standardFeesEmitter = new EventEmitter<IStandardFees>();
  additionalFeesForm: FormGroup;

  constructor(private auth: AuthService, private fb: FormBuilder) {}

  get isAuthenticated() {
    return this.auth.isSignedIn;
  }

  ngOnInit(): void {
    this.additionalFeesForm = this.fb.group({
      partsCost: null,
      hours: null,
    });
    this.onFormChange();
  }

  onFormChange() {
    if (this.isAuthenticated === false) {
      this.additionalFeesForm.disable();
    } else {
      this.additionalFeesForm.enable();
      var fees = this.getFormValues();
      this.standardFeesEmitter.emit(fees);
    }
  }

  getFormValues() {
    const formValues = this.additionalFeesForm.value;
    // Getting the values of the form and if their non numerical value defaulting a value of 0;
    const partsCost = formValues.partsCost && !isNaN(formValues.partsCost) ? parseInt(formValues.partsCost) : 0;
    const hours = formValues.hours && !isNaN(formValues.hours) ? parseInt(formValues.hours) : 0;
    var fees: IStandardFees = { partCost: partsCost, hours: hours };
    return fees;
  }
}
