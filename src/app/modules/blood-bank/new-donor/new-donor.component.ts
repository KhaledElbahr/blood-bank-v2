import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { DialogService } from './../../../services/dialog.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-new-donor',
  templateUrl: './new-donor.component.html',
  styleUrls: ['./new-donor.component.scss']
})
export class NewDonorComponent {
  types = [
    {id: 1, value: 'male'},
    {id: 2, value: 'female'}
  ];

  get civilId() {
    return this.donorForm.get('civilId');
  }

  get firstName() {
    return this.donorForm.get('firstName');
  }

  get lastName() {
    return this.donorForm.get('lastName');
  }

  get gender() {
    return this.donorForm.get('gender');
  }

  get email() {
    return this.donorForm.get('email');
  }

  get phone() {
    return this.donorForm.get('phone');
  }

  constructor(private fb: FormBuilder, private dialogService: DialogService) { }

  donorForm = this.fb.group({
    civilId: ['', [Validators.required,
      // tslint:disable-next-line:max-line-length
      Validators.pattern('(2|3)[0-9][1-9][0-1][1-9][0-3][1-9](01|02|03|04|11|12|13|14|15|16|17|18|19|21|22|23|24|25|26|27|28|29|31|32|33|34|35|88)\d\d\d\d\d\
      '),
      Validators.minLength(14), Validators.maxLength(14)]],
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    gender: ['', Validators.required],
    email: ['', Validators.email],
    phone: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
  });

  canDeactivate(): Observable<boolean> | boolean {
    // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
    if (!this.donorForm.dirty) {
      return true;
    }
    // Otherwise ask the user with the dialog service and return its
    // observable which resolves to true or false when the user decides
    return this.dialogService.confirm('Discard changes?');
  }

  onSubmit() {
    console.log(this.donorForm.value);
    this.donorForm.reset();
    window.alert('You Successfully submitted the Form');
  }

}
