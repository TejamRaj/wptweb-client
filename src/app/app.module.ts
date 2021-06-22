import { WotService } from './shared/wot.service';
import { RequireAuthenticatedUserRouteGuardService } from './shared/require-authenticated-user-route-guard.service';
import { OidConnectService } from './shared/OidConnect.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninOidcComponent } from './signin-oidc/signin-oidc.component';
import { WorkplacesOnTourComponent } from './workplaces-on-tour/workplaces-on-tour.component';
import { MyTourWorkplacesComponent } from './my-tour-workplaces/my-tour-workplaces.component';
import { WorkplacebookingComponent } from './workplacebooking/workplacebooking.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    SigninOidcComponent,
    WorkplacesOnTourComponent,
    MyTourWorkplacesComponent,
    WorkplacebookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [OidConnectService,
  RequireAuthenticatedUserRouteGuardService,WotService],
  bootstrap: [AppComponent]
})
export class AppModule { }
