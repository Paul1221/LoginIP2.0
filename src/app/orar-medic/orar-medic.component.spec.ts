import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrarMedicComponent } from './orar-medic.component';

describe('OrarMedicComponent', () => {
  let component: OrarMedicComponent;
  let fixture: ComponentFixture<OrarMedicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrarMedicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrarMedicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
