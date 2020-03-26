import { SearchUserComponent } from './search-user/search-user.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// components
import { AdminComponent } from './admin/admin.component';
import { NewUserComponent } from './new-user/new-user.component';
import { UserDetailsComponent } from './search-user/user-details/user-details.component';
import { ChangePasswordComponent } from 'src/app/components/change-password/change-password.component';
import { CanDeactivateGuard } from 'src/app/Auth/can-deactivate.guard';

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        children: [
          { path: '', component: AdminHomeComponent },
          { path: 'new-user', component: NewUserComponent, canDeactivate: [CanDeactivateGuard] },
          // {
          //   path: 'user',
          //   component: UserComponent,
          //   children: [
          //     {
          //       path: 'user/:id',
          //       component: UserDetailsComponent
          //     }
          //   ]
          // }

          { path: 'user', component: SearchUserComponent },
          { path: 'user/:id', component: UserDetailsComponent },
          { path: 'changePassword', component: ChangePasswordComponent, canDeactivate: [CanDeactivateGuard], },
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
