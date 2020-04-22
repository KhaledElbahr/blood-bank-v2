import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Guards
import { LoginAuthGuard } from './Auth/login-auth.guard';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'change-password', component: ChangePasswordComponent },
  {
    path: 'admin',
    // canActivate: [LoginAuthGuard],
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule),
  },
  {
    path: 'blood-bank',
    // canActivate: [LoginAuthGuard],
    loadChildren: () => import('./modules/blood-bank/blood-bank.module').then(m => m.BloodBankModule),
  },
  {
    path: 'doctor',
    // canActivate: [LoginAuthGuard],
    loadChildren: () => import('./modules/doctor/doctor.module').then(m => m.DoctorModule),
  },
  {
    path: 'hospital',
    // canActivate: [LoginAuthGuard],
    loadChildren: () => import('./modules/hospital/hospital.module').then(m => m.HospitalModule),
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
