import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientProfileCreationComponent } from './patient-profile-creation.component';

describe('PatientProfileCreationComponent', () => {
  let component: PatientProfileCreationComponent;
  let fixture: ComponentFixture<PatientProfileCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientProfileCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientProfileCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
