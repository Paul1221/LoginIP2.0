import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpiratComponent } from './expirat.component';

describe('ExpiratComponent', () => {
  let component: ExpiratComponent;
  let fixture: ComponentFixture<ExpiratComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpiratComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpiratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
