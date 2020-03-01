import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { DoctorRoutingModule } from './doctor-routing.module';
import { DoctorComponent } from './doctor/doctor.component';
import { DoctorHomeComponent } from './doctor-home/doctor-home.component';
import { DoctorRequestComponent } from './doctor-request/doctor-request.component';
import { ListRequestComponent } from './list-request/list-request.component';
import { ListPatientComponent } from './list-patient/list-patient.component';
import { RequestDetailsComponent } from './list-request/request-details/request-details.component';
import { RequestComponent } from './list-request/request/request.component';
import { PatientDetailsComponent } from './list-patient/patient-details/patient-details.component';
import { SearchPipe } from 'src/app/pipes/search.pipe';

@NgModule({
  declarations: [
    DoctorComponent,
    DoctorHomeComponent, DoctorRequestComponent, ListRequestComponent, ListPatientComponent, RequestDetailsComponent,
    RequestComponent,
    PatientDetailsComponent,
    SearchPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DoctorRoutingModule
  ]
})
export class DoctorModule { }
