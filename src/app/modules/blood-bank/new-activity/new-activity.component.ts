import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { DialogService } from 'src/app/services/dialog.service';

@Component({
  selector: 'app-new-activity',
  templateUrl: './new-activity.component.html',
  styleUrls: ['./new-activity.component.scss']
})
export class NewActivityComponent implements OnInit {
  activityForm: FormGroup;
  statuses: [
    { id: 1, value: 'accepted' },
    { id: 2, value: 'rejected' }
  ];

  donationTypes = [
    { id: 1, value: 'whole blood' },
    { id: 2, value: 'plasma' },
    { id: 3, value: 'platelet' }
  ];

  viruses = [
    { id: 1, value: 'HIV' },
    { id: 2, value: 'HEPATITIS A' },
    { id: 3, value: 'HEPATITIS B' },
    { id: 4, value: 'HEPATITIS C' },
    { id: 5, value: 'H1N1' },
    { id: 6, value: 'COVID-19' }
  ];

  get donorId() {
    return this.activityForm.get('donorId');
  }

  get status() {
    return this.activityForm.get('status');
  }

  get donationType() {
    return this.activityForm.get('donationType');
  }

  get virus() {
    return this.activityForm.get('virus');
  }

  get temp() {
    return this.activityForm.get('temp');
  }

  get weight() {
    return this.activityForm.get('weight');
  }

  get height() {
    return this.activityForm.get('height');
  }

  constructor(private fb: FormBuilder, private dialogService: DialogService) { }

  ngOnInit() {
    this.activityForm = this.fb.group({
      donorId: [{ value: '2', disabled: true }, Validators.required],
      status: ['', Validators.required],
      donationType: ['', Validators.required],
      virus: [''],
      temp: ['', Validators.required],
      weight: ['', Validators.required],
      height: ['', Validators.required],
    });
  }
  canDeactivate(): Observable<boolean> | boolean {
    // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
    if (!this.activityForm.dirty) {
      return true;
    }
    // Otherwise ask the user with the dialog service and return its
    // observable which resolves to true or false when the user decides
    return this.dialogService.confirm('Discard changes?');
  }

  onSubmit() {
    console.log(this.activityForm.value);
    this.activityForm.reset();
    window.alert('You Successfully submitted the Form');
  }

}
