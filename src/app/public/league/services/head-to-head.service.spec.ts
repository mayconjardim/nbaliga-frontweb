import { TestBed } from '@angular/core/testing';

import { HeadToHeadService } from './head-to-head.service';

describe('HeadToHeadService', () => {
  let service: HeadToHeadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeadToHeadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
