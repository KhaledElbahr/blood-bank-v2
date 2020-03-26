import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HospitalRoutingModule } from './hospital-routing.module';
import { HospitalComponent } from './hospital/hospital.component';
import { HospitalHomeComponent } from './hospital-home/hospital-home.component';
import { NewPatientComponent } from './new-patient/new-patient.component';
import { ListPatientComponent } from './list-patient/list-patient.component';
import { PatientDetailsComponent } from './list-patient/patient-details/patient-details.component';

@NgModule({
  declarations: [
    HospitalComponent,
    HospitalHomeComponent,
    NewPatientComponent,
    ListPatientComponent,
    PatientDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HospitalRoutingModule
  ]
})
export class HospitalModule { }
