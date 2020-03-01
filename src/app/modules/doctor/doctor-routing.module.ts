import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListRequestComponent } from './list-request/list-request.component';
import { DoctorRequestComponent } from './doctor-request/doctor-request.component';
import { DoctorComponent } from './doctor/doctor.component';
import { ListPatientComponent } from './list-patient/list-patient.component';
import { RequestDetailsComponent } from './list-request/request-details/request-details.component';
import { DoctorHomeComponent } from './doctor-home/doctor-home.component';
import { PatientDetailsComponent } from './list-patient/patient-details/patient-details.component';

const routes: Routes = [
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
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
