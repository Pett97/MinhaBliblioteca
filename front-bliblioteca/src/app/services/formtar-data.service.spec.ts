import { TestBed } from '@angular/core/testing';

import { FormtarDataService } from './formtar-data.service';

describe('FormtarDataService', () => {
  let service: FormtarDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormtarDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
