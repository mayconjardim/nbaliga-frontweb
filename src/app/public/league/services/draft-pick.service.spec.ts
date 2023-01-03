import { TestBed } from '@angular/core/testing';

import { DraftPickService } from './draft-pick.service';

describe('DraftPickService', () => {
  let service: DraftPickService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DraftPickService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
