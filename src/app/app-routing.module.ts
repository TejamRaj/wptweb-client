import { RequireAuthenticatedUserRouteGuardService } from './shared/require-authenticated-user-route-guard.service';
import { MyTourWorkplacesComponent } from './my-tour-workplaces/my-tour-workplaces.component';
import { WorkplacesOnTourComponent } from './workplaces-on-tour/workplaces-on-tour.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninOidcComponent } from './signin-oidc/signin-oidc.component';

const routes: Routes = [
  { path: '', redirectTo: 'app', pathMatch: 'full'},
  { path: 'signin-oidc', component: SigninOidcComponent },
  {path:'my-tour-workplaces', component:MyTourWorkplacesComponent,
  canActivate:[RequireAuthenticatedUserRouteGuardService]},
  { path: 'workplaces-on-tour', component:WorkplacesOnTourComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
