import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlreadyauthComponent } from './alreadyauth.component';

describe('AlreadyauthComponent', () => {
  let component: AlreadyauthComponent;
  let fixture: ComponentFixture<AlreadyauthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlreadyauthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlreadyauthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
