import { RequireAuthenticatedUserRouteGuardService } from './shared/require-authenticated-user-route-guard.service';
import { OidConnectService } from './shared/OidConnect.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninOidcComponent } from './signin-oidc/signin-oidc.component';
import { WorkplacesOnTourComponent } from './workplaces-on-tour/workplaces-on-tour.component';
import { MyTourWorkplacesComponent } from './my-tour-workplaces/my-tour-workplaces.component';



@NgModule({
  declarations: [
    AppComponent,
    SigninOidcComponent,
    WorkplacesOnTourComponent,
    MyTourWorkplacesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [OidConnectService,
  RequireAuthenticatedUserRouteGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
