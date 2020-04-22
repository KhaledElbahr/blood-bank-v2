import { Injectable } from '@angular/core';
import { DONOR } from './mock-donor';
import { Donor } from './donor';

@Injectable({
  providedIn: 'root'
})
export class DonorService {

  private donors: Donor[] = DONOR;

  fetchDonorDataByCivilId(civilId: number | string) {
    const patient = this.donors.find(
      p => {
        return p.civilId === civilId;
      }
    );
    return patient;
  }
}
