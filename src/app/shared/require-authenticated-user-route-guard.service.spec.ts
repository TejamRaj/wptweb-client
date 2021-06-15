import { TestBed } from '@angular/core/testing';

import { RequireAuthenticatedUserRouteGuardService } from './require-authenticated-user-route-guard.service';

describe('RequireAuthenticatedUserRouteGuardService', () => {
  let service: RequireAuthenticatedUserRouteGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequireAuthenticatedUserRouteGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
