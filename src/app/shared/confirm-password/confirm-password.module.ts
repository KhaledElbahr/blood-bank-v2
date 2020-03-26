import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmPasswordValidatorDirective } from '../confirm-password-validator.directive';
import { ChangePasswordComponent } from 'src/app/components/change-password/change-password.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ChangePasswordComponent,
    ConfirmPasswordValidatorDirective],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    CommonModule,
    ChangePasswordComponent,
    ConfirmPasswordValidatorDirective
  ]
})
export class ConfirmPasswordModule { }
