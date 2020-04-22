import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Patient } from '../../patient';
import { PatientService } from '../../patient.service';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.scss']
})
export class PatientDetailsComponent implements OnInit {
  patient: Patient;

  constructor(
    private patientService: PatientService,
    private route: ActivatedRoute) { }

    ngOnInit() {
      this.route.fragment.subscribe();
      let civilId: any;
      this.route.params.subscribe(
        (params: Params) => {
          civilId = params.civilId;
        }
      );
      this.patient = this.patientService.fetchPatientDataByCivilId(civilId);
      console.log(this.patient);
    }

    update() {}

    delete() {}
}
