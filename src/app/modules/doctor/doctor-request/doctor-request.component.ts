import { Patient } from './../patient';
import { RequestService } from './../request.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';

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

  productNames: [
    { id: 1, value: 'Whole Blood' },
    { id: 2, value: 'Apheresis' }
  ];
  bloodTypes: [
    { id: 1, value: 'A+' },
    { id: 2, value: 'B+' },
    { id: 3, value: 'O' }
  ];
  priorities: [
    { id: 1, value: 'critical' },
    { id: 2, value: 'normal' }
  ];
  // volume = '450ml';
  // requestedBy = this.doctor.name;
  patient: Patient;
  pId: number;


  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private requestService: RequestService) { }


  RequestForm = this.fb.group({
    id: [this.loop()],
    productName: [''],
    bloodType: [''],
    volume: [{ value: '450ml', disabled: true }],
    numOfBags: ['', Validators.required],
    priority: [''],
    patientId: ['', Validators.required],
    requiredDate: ['', Validators.required],
    requestedBy: [this.doctor.name]
  });

  // TODO: for develop purposes only
  loop(): number {
    for (let i = 1; i++;) {
      return (i + 5);
    }
  }

  ngOnInit() {
    this.route.paramMap.subscribe(
      (params: Params) => {
        this.pId = +params.params.pId;
        this.patient = this.requestService.fetchPatientDataById(this.pId);
      }
    );
    this.patient ? this.RequestForm.controls.patientId.patchValue(this.patient.id)
      : this.RequestForm.controls.patientId.patchValue('');
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
    this.requestService.createRequest(this.RequestForm.value);
    this.RequestForm.reset();
    window.confirm('You have successfully added a new request.');
    this.router.navigate(['doctor/requests']);
  }

  onReset() {
    this.RequestForm.reset();
  }
}
