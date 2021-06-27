import { WotService } from './shared/wot.service';
import { RequireAuthenticatedUserRouteGuardService } from './shared/require-authenticated-user-route-guard.service';
import { OidConnectService } from './shared/OidConnect.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninOidcComponent } from './signin-oidc/signin-oidc.component';
import { WorkplacesComponent } from './workplaces/workplaces.component';
import { MyTourWorkplacesComponent } from './my-tour-workplaces/my-tour-workplaces.component';
import { WorkplacebookingComponent } from './workplacebooking/workplacebooking.component';
import { HttpClientModule } from '@angular/common/http';
import { NaavbarComponent } from './naavbar/naavbar.component';
import { AboutComponent } from './about/about.component';



@NgModule({
  declarations: [
    AppComponent,
    SigninOidcComponent,
    WorkplacesComponent,
    MyTourWorkplacesComponent,
    WorkplacebookingComponent,
    NaavbarComponent,
    AboutComponent
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
