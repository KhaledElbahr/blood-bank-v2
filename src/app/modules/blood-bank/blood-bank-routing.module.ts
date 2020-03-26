import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BloodBankComponent } from './blood-bank/blood-bank.component';
import { BloodBankHomeComponent } from './blood-bank-home/blood-bank-home.component';
import { FindDonorComponent } from './find-donor/find-donor.component';
import { NewDonorComponent } from './new-donor/new-donor.component';
import { NewActivityComponent } from './new-activity/new-activity.component';

const routes: Routes = [
  {
    path: '',
    component: BloodBankComponent,
    children: [
      {
        path: '',
        children: [
          { path: '', component: BloodBankHomeComponent },
          { path: 'add-donor', component: NewDonorComponent },
          { path: 'find-donor', component: FindDonorComponent },
          { path: 'requests', component: NewActivityComponent },
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BloodBankRoutingModule { }
