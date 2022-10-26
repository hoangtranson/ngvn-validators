import { TestBed } from '@angular/core/testing';

import { MainLibService } from './main-lib.service';

describe('MainLibService', () => {
  let service: MainLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MainLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
