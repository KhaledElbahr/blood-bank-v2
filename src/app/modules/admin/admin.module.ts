import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
// Components
import { AdminComponent } from './admin/admin.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { NewUserComponent } from './new-user/new-user.component';
import { UserComponent } from './user/user.component';
import { UserDetailsComponent } from './search-user/user-details/user-details.component';
import { SearchUserComponent } from './search-user/search-user.component';

@NgModule({
  declarations: [
    AdminComponent,
    AdminHomeComponent,
    NewUserComponent,
    UserComponent,
    UserDetailsComponent,
    SearchUserComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
