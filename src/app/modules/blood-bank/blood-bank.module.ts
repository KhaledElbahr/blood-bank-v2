import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BloodBankRoutingModule } from './blood-bank-routing.module';
import { BloodBankComponent } from './blood-bank/blood-bank.component';
import { BloodBankHomeComponent } from './blood-bank-home/blood-bank-home.component';
import { NewDonorComponent } from './new-donor/new-donor.component';
import { FindDonorComponent } from './find-donor/find-donor.component';
import { NewActivityComponent } from './new-activity/new-activity.component';

@NgModule({
  declarations: [BloodBankComponent, BloodBankHomeComponent, NewDonorComponent, FindDonorComponent, NewActivityComponent],
  imports: [
    CommonModule,
    BloodBankRoutingModule
  ]
})
export class BloodBankModule { }
