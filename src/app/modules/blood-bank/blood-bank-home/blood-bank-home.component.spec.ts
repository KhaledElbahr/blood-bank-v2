import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodBankHomeComponent } from './blood-bank-home.component';

describe('BloodBankHomeComponent', () => {
  let component: BloodBankHomeComponent;
  let fixture: ComponentFixture<BloodBankHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BloodBankHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BloodBankHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
