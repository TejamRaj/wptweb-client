import { Component, Input, OnInit } from '@angular/core';
import { OidConnectService } from '../shared/OidConnect.service';

@Component({
  selector: 'app-naavbar',
  templateUrl: './naavbar.component.html',
  styleUrls: ['./naavbar.component.css']
})
export class NaavbarComponent implements OnInit {


  @Input('userType') userType='Individual';
  @Input() oidcClient:OidConnectService;

  constructor(private openIdConnectService: OidConnectService) {
    this.oidcClient=openIdConnectService;
   }


   ngOnInit(): void {
  }

   redirectToIDP($event){

    let userType = $event.target.innerText;
    var path= window.location.pathname;
  
    if(path!="/signin-oidc"){

       if(!this.openIdConnectService.userAvailable)
         this.openIdConnectService.triggerSignIn(userType);

   }
  }

  

}
