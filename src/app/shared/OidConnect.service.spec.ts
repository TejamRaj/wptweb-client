import { TestBed } from '@angular/core/testing';

import { OidConnectService } from './OidConnect.service';

describe('OidconnectService', () => {
  let service: OidConnectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OidConnectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
