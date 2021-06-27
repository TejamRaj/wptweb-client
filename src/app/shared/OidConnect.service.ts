import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserManager,User } from 'oidc-client';
import { ReplaySubject } from 'rxjs';
import { environment } from '../../environments/environment';




@Injectable({
  providedIn: 'root'
})
export class OidConnectService {

  private userManager: UserManager = new UserManager(environment.openIdConnectSettings);
  private currentUser: User;


  userLoaded$ = new ReplaySubject<boolean>(1);

  constructor() {
    this.userManager.clearStaleState();

    this.userManager.events.addUserLoaded(user => {
      if (!environment.production) {
        console.log('User loaded.', user);
      }
      this.currentUser = user;
      this.userLoaded$.next(true);
    });

    this.userManager.events.addUserUnloaded(() => {
      if (!environment.production) {
        console.log('User unloaded');
      }
      this.currentUser = null;
      this.userLoaded$.next(false);
    });

  }




  get userAvailable(): boolean {

    return this.currentUser!=null;
  }

  get user(): User {
    return this.currentUser;
  }

  

  triggerSignIn(userKind?) {

    userKind = typeof userKind !== 'undefined' ? userKind : 'Individual';
    this.userManager.signinRedirect({
        extraQueryParams: {
          userType:userKind
        },
    }).then(function () {
      if (!environment.production) {
        console.log('Redirection to signin triggered.');
      }
    });
  }

  handleCallback() {
    this.userManager.signinRedirectCallback().then(function (user) {
      if (!environment.production) {
        console.log('Callback after signin handled.', user);
      }
    });
  }

  handleSilentCallback() {
    this.userManager.signinSilentCallback().then(function (user) {
      this.currentUser = user
      if (!environment.production) {
        console.log('Callback after silent signin handled.', user);
      }
    });
  }

  triggerSignOut() {
    this.userManager.signoutRedirect().then(function (resp) {
      if (!environment.production) {
        console.log('Redirection to sign out triggered.', resp);
      }
    });
  };
}
