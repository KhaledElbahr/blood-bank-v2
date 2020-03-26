import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { DialogService } from './../../../services/dialog.service';


@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent {

  get firstName() {
    return this.userForm.get('firstName');
  }

  get lastName() {
    return this.userForm.get('lastName');
  }

  get gender() {
    return this.userForm.get('gender');
  }

  get usertype() {
    return this.userForm.get('usertype');
  }

  get email() {
    return this.userForm.get('email');
  }

  constructor(
    private fb: FormBuilder,
    private dialogService: DialogService) { }
  // departments = [
  //   'Emergency',
  //   'Critical Care',
  //   'General Surgery'
  // ];

  usertypes = [
    { id: 2, value: 'Blood Bank Staff' },
    { id: 3, value: 'Hopitial Staff' },
    { id: 4, value: 'Doctor' },
    { id: 1, value: 'Admin' }
  ];

  formStatus = false;
  userName;

  userForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    gender: ['', Validators.required],
    usertype: [null, Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', Validators.required],
  });

  // password = this.random_password_generate(10, 8);

  // if(this.userForm.status === 'valid') {
  //   this.userName = this.random_username_generate(this.userForm.controls.firstName.value, this.userForm.controls.lastName.value);
  // }


  canDeactivate(): Observable<boolean> | boolean {
    // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
    if (!this.userForm.dirty) {
      return true;
    }
    // Otherwise ask the user with the dialog service and return its
    // observable which resolves to true or false when the user decides
    return this.dialogService.confirm('Discard changes?');
  }

  onSubmit() {
    console.log(this.userForm.value);
    this.userForm.reset();
    window.alert('You Successfully submitted the Form');
  }

  // TODO: Generate Random Password
  // random_password_generate(max: number, min: number) {
  //   const passwordChars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  //   const randPwLen =
  //   Math.floor(Math.random() * (max - min + 1)) + min;
  //   const randPassword =
  //   Array(randPwLen).fill(passwordChars).map((x) => {
  //      return x[Math.floor(Math.random() * x.length)];
  //     }).join('');
  //   console.log(randPwLen);
  //   console.log(randPassword);
  //   return randPassword;
  // }

  // random_username_generate(firstName: string, lastName: string) {
  //   const randUsLen = firstName + ' ' + lastName;
  //   console.log(randUsLen);
  //   return randUsLen;
  // }

}
