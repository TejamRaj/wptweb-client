import { Component, Input } from '@angular/core';
import { OidConnectService } from './shared/OidConnect.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = ' WorkPlace On Tour :)';

 @Input() oidcClient:OidConnectService

  constructor(private openIdConnectService: OidConnectService) {
    this.oidcClient=openIdConnectService;
  }

   ngOnInit(){
   
  var path= window.location.pathname;
    
     if(path!="/signin-oidc"){

        if(!this.openIdConnectService.userAvailable)
          this.openIdConnectService.triggerSignIn();
      
   }
  }
}
