import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { OidConnectService } from './OidConnect.service';

@Injectable({
  providedIn: 'root'
})
export class RequireAuthenticatedUserRouteGuardService implements CanActivate {

  constructor(private openIdConnectService: OidConnectService,
    private router: Router) { }

  canActivate() {
    if (this.openIdConnectService.userAvailable) {
      return true;
    }
    else {
      // trigger signin
      this.openIdConnectService.triggerSignIn();
      return false;
    }
  }
}
