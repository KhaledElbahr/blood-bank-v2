import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list-patient',
  templateUrl: './list-patient.component.html',
  styleUrls: ['./list-patient.component.scss']
})
export class ListPatientComponent {
  search;

  constructor(private route: ActivatedRoute, private router: Router) { }

  getPatientData(ctrl) {
    // this.router.navigate(['./', this.search], { relativeTo: this.route });
    console.log(this.search);
    // console.log(ctrl);
  }

}
