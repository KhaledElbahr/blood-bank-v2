import { Request } from './../../../request';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { RequestService } from '../../../request.service';

@Component({
  selector: 'app-request-edit',
  templateUrl: './request-edit.component.html',
  styleUrls: ['./request-edit.component.scss']
})
export class RequestEditComponent implements OnInit {

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private requestService: RequestService) { }


  request: Request;
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

  EditRequestForm: FormGroup;


  get productName() {
    return this.EditRequestForm.get('productName');
  }

  get numOfBags() {
    return this.EditRequestForm.get('numOfBags');
  }



  ngOnInit() {
    let id: number;
    this.route.params.subscribe(
      (params: Params) => {
        console.log(+params.id);
        id = +params.id;
      }
    );
    this.request = this.requestService.getRequest(id);
    console.log(this.request);

    this.EditRequestForm = this.fb.group({
      id: [this.request.id],
      productName: [this.request.productName.value],
      bloodType: [this.request.bloodtType.value],
      numOfBags: [this.request.numOfBags, Validators.required],
      priority: [this.request.priority.value],
      patientId: [this.request.patientId, Validators.required],
      requiredDate: [this.request.requestedDate, Validators.required],
    });
  }

  onSubmit() {
  //   // TODO: Use EventEmitter with form value
  //   // console.warn(this.RequestForm.value);
  //   this.requestService.createRequest(this.RequestForm.value);
  //   this.RequestForm.reset();
  //   window.confirm('You have successfully added a new request.');
  //   this.router.navigate(['doctor/requests']);
  }

  onReset() {
    // this.EditRequestForm.reset();
  }

}
