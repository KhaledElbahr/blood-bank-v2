import { Patient } from './../patient';
import { RequestService } from './../request.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-doctor-request',
  templateUrl: './doctor-request.component.html',
  styleUrls: ['./doctor-request.component.scss']
})
export class DoctorRequestComponent implements OnInit {
  doctor = {
    name: 'Ali',
    id: 1
  };

  productNames: ['Whole Blood', 'Apheresis'];
  bloodtTypes: ['A+', 'B+', 'O'];
  priorities: ['critical', 'high', 'middle', 'low'];
  volume = '450ml';
  requestedBy = this.doctor.name;
  patient: Patient;
  pId: number;

  RequestForm = this.fb.group({
    productName: ['', Validators.required],
    bloodtType: ['', Validators.required],
    numOfBags: ['', Validators.required],
    priority: ['', Validators.required],
    patientId: ['', Validators.required],
    requiredDate: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private requestService: RequestService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(
      (params: Params) => {
        this.pId = +params.params.pId;
        this.patient = this.requestService.fetchPatientDataById(this.pId);
        // console.log(this.pId);
      }
    );
    // this.RequestForm.controls.bloodtType.patchValue(this.patient.bloodType);
    // this.RequestForm.controls.patientId.patchValue(this.patient.id);
  }

  get productName() {
    return this.RequestForm.get('productName');
  }

  get numOfBags() {
    return this.RequestForm.get('numOfBags');
  }

  onSubmit() {
      // TODO: Use EventEmitter with form value
    // console.warn(this.RequestForm.value);
    this.RequestForm.reset();
    window.confirm('You have successfully logged in.');
  }

  onReset() {
    this.RequestForm.reset();
  }
}
