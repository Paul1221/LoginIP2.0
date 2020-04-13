import { TestBed } from '@angular/core/testing';

import { ConfirmationMailService } from './confirmation-mail.service';

describe('ConfirmationMailService', () => {
  let service: ConfirmationMailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfirmationMailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
