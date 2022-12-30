import { TestBed } from '@angular/core/testing';

import { SeasonInfoService } from './season-info.service';

describe('SeasonInfoService', () => {
  let service: SeasonInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeasonInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
