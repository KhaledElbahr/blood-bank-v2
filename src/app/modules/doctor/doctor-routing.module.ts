import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListRequestComponent } from './list-request/list-request.component';
import { DoctorRequestComponent } from './doctor-request/doctor-request.component';
import { DoctorComponent } from './doctor/doctor.component';
import { ListPatientComponent } from './list-patient/list-patient.component';
import { RequestEditComponent } from './list-request/request-details/request-edit/request-edit.component';
import { RequestDetailsComponent } from './list-request/request-details/request-details.component';
import { DoctorHomeComponent } from './doctor-home/doctor-home.component';
import { PatientDetailsComponent } from './list-patient/patient-details/patient-details.component';

const doctorRoutes: Routes = [
  {
    path: '',
    component: DoctorComponent,
    children: [
      {
        path: '',
        children: [
          { path: '', component: DoctorHomeComponent },
          { path: 'add-request', component: DoctorRequestComponent },
          { path: 'requests', component: ListRequestComponent },
          { path: 'requests/:id', component: RequestDetailsComponent },
          { path: 'requests/:id/editMode', component: RequestEditComponent },
          {
            path: 'patients', component: ListPatientComponent, children:
              [ { path: 'patient/:civilId', component: PatientDetailsComponent }, ]
          },
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(doctorRoutes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
