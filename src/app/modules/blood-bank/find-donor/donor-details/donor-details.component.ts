import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Donor } from '../../donor';
import { DonorService } from '../../donor.service';

@Component({
  selector: 'app-donor-details',
  templateUrl: './donor-details.component.html',
  styleUrls: ['./donor-details.component.scss']
})
export class DonorDetailsComponent implements OnInit {

  donor: Donor;

  constructor(
    private donorService: DonorService,
    private route: ActivatedRoute) { }

    ngOnInit() {
      this.route.fragment.subscribe();
      let civilId: any;
      this.route.params.subscribe(
        (params: Params) => {
          civilId = params.civilId;
        }
      );
      this.donor = this.donorService.fetchDonorDataByCivilId(civilId);
      console.log(this.donor);
    }

    update() {}

    delete() {}
}
