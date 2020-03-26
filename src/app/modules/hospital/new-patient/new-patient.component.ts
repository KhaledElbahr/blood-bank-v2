import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-new-patient',
  templateUrl: './new-patient.component.html',
  styleUrls: ['./new-patient.component.scss']
})
export class NewPatientComponent {
  bloodTypes: ['O-', 'O+', 'A-',
  'A+', 'B-', 'B+', 'AB-', 'AB'];

  constructor(private fb: FormBuilder) { }

  patientForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    civilId: ['', Validators.required],
    gender: ['', Validators.required],
    bloodType: [''],
    email: [''],
    phone: ['', Validators.required],
    address: ['']
  });

  get firstName() {
    return this.patientForm.get('firstName');
  }

  get lastName() {
    return this.patientForm.get('lastName');
  }

  onSubmit() {
    console.log(this.patientForm.value);
    this.patientForm.reset();
    window.alert('You Successfully submitted the Form');
  }
}
