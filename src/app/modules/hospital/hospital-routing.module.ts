import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HospitalComponent } from './hospital/hospital.component';
import { HospitalHomeComponent } from './hospital-home/hospital-home.component';
import { NewPatientComponent } from './new-patient/new-patient.component';
import { ListPatientComponent } from './list-patient/list-patient.component';
import { PatientDetailsComponent } from './list-patient/patient-details/patient-details.component';


const hRoutes: Routes = [
  {
    path: '',
    component: HospitalComponent,
    children: [
      {
        path: '',
        children: [
          { path: '', component: HospitalHomeComponent },
          { path: 'add-patient', component: NewPatientComponent },
          {
            path: 'patients', component: ListPatientComponent, children:
              [ { path: 'patient/:civilId', component: PatientDetailsComponent }, ]
          },
        ]
      }
    ]
  }
];

// { path: 'patients', component: ListPatientComponent },
// { path: 'patients/:id', component: PatientDetailsComponent },

@NgModule({
  imports: [RouterModule.forChild(hRoutes)],
  exports: [RouterModule]
})
export class HospitalRoutingModule { }
