import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// Components
import { AdminComponent } from './admin/admin.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { NewUserComponent } from './new-user/new-user.component';
import { UserDetailsComponent } from './search-user/user-details/user-details.component';
import { SearchUserComponent } from './search-user/search-user.component';
import { UserComponent } from './search-user/user/user.component';
// Shared Module
import { ConfirmPasswordModule } from 'src/app/shared/confirm-password/confirm-password.module';
// Lazy Loading Scroll
import {MatInputModule} from '@angular/material';

@NgModule({
  declarations: [
    AdminComponent,
    AdminHomeComponent,
    NewUserComponent,
    UserDetailsComponent,
    UserComponent,
    SearchUserComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ConfirmPasswordModule,
    AdminRoutingModule,
    MatInputModule
  ],
})
export class AdminModule { }
