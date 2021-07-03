import { AboutComponent } from './about/about.component';
import { RequireAuthenticatedUserRouteGuardService } from './shared/require-authenticated-user-route-guard.service';
import { MyTourWorkplacesComponent } from './my-tour-workplaces/my-tour-workplaces.component';
import { WorkplacesComponent } from './workplaces/workplaces.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninOidcComponent } from './signin-oidc/signin-oidc.component';
import { WorkplaceDetailsComponent } from './workplace-details/workplace-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'app', pathMatch: 'full'},
  { path: 'workplaces', component:WorkplacesComponent },
  { path: 'signin-oidc', component: SigninOidcComponent },
  {path:'my-tour-workplaces', component:MyTourWorkplacesComponent,
  canActivate:[RequireAuthenticatedUserRouteGuardService]},
  { path: 'about', component:AboutComponent },
  {path:'workplace-details/:tourId', component:WorkplaceDetailsComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
