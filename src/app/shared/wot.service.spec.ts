import { TestBed } from '@angular/core/testing';

import { WotService } from './wot.service';

describe('WotService', () => {
  let service: WotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
