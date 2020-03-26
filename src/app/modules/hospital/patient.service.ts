import { Injectable } from '@angular/core';
import { PATIENT } from './mock-patient';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private patients: Patient[] = PATIENT;

  fetchPatientDataByCivilId(civilId: number | string) {
    const patient = this.patients.find(
      p => {
        return p.civilId === civilId;
      }
    );
    return patient;
  }
}
