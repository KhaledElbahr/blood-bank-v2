import { AdminHomeComponent } from './admin-home/admin-home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// components
import { AdminComponent } from './admin/admin.component';
import { NewUserComponent } from './new-user/new-user.component';
import { UserComponent } from './user/user.component';
import { UserDetailsComponent } from './search-user/user-details/user-details.component';

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        children: [
          { path: 'new-user', component: NewUserComponent },
          {
            path: 'user',
            component: UserComponent,
            children: [
              {
                path: 'user/:id',
                component: UserDetailsComponent
              }
            ]
          },
          { path: '', component: AdminHomeComponent }
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
