import { Patient } from './../../patient';
import { RequestService } from './../../request.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.scss']
})
export class PatientDetailsComponent implements OnInit {
  patient: Patient;

  constructor(
    private requestService: RequestService,
    private route: ActivatedRoute,
    private router: Router) { }

    ngOnInit() {
      // console.log(this.route.snapshot.queryParams);
      // console.log(this.route.snapshot.fragment);
      // this.route.queryParams.subscribe(
      //   (params: Params) => {
      //     this.allowEdit = params.allowEdit === '1' ? true : false;
      //   }
      // );
      this.route.fragment.subscribe();
      let civilId: string;
      this.route.params.subscribe(
        (params: Params) => {
          civilId = params.civilId;
        }
      );
      this.patient = this.requestService.fetchPatientDataByCivilId(civilId);
      console.log(typeof(civilId));
    }

    addRequest() {
      this.router.navigate(['../../../add-request',
      { pId: this.patient.id} ], { relativeTo: this.route });
    }
}
