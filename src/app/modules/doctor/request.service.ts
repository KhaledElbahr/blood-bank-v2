import { PATIENT } from './mock-patient';
import { REQUESTS } from './mock-requests';
import { Request } from './request';
import { Patient } from './patient';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  private requests: Request[] = REQUESTS;
  private patients: Patient[] = PATIENT;

  createRequest(request: Request) {
    this.requests.push(request);
  }

  getRequests() {
    return this.requests.slice();
  }

  // getPatients() {
  //   return this.patients.slice();
  // }

  // getRequest(id: number | string) {
  //   return this.getRequests().pipe(
  //     // (+) before `id` turns the string into a number
  //     map((requests: Request[]) => requests.find(request => request.id === +id))
  //   );
  // }


  getRequest(id: number | string) {
    const request = this.requests.find(
      r => {
        return r.id === id;
      }
    );
    return request;
  }

  fetchPatientDataByCivilId(civilId: number | string) {
    const patient = this.patients.find(
      p => {
        return p.civilId === civilId;
      }
    );
    return patient;
  }

  fetchPatientDataById(id: number | string) {
    const patient = this.patients.find(
      p => {
        return p.id === id;
      }
    );
    return patient;
  }

}
