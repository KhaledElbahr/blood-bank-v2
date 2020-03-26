import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ConfirmPasswordValidatorDirective } from 'src/app/shared/confirm-password-validator.directive';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  PasswordForm: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.PasswordForm = this.fb.group({
      oldPass: ['', Validators.required],
      newPass: ['', [Validators.required,
                Validators.pattern('(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}')]],
      confirmPass: ['', Validators.required]
    }, { updateOn: 'blur' });

    this.newPass.valueChanges.subscribe(() => {
      this.confirmPass.updateValueAndValidity();
      console.log(this.newPass.value);
    });

  }

  onSubmit() {
    console.log(this.PasswordForm.value);
    this.PasswordForm.reset();
    window.alert('You Successfully changed the password');
  }

  get oldPass() {
    return this.PasswordForm.get('oldPass');
  }

  get newPass() {
    return this.PasswordForm.get('newPass');
  }

  get confirmPass() {
    return this.PasswordForm.get('confirmPass');
  }
}
// (change)="confirmPass.control.updateValueAndValidity()"
