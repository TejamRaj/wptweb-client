import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { OidConnectService } from './shared/OidConnect.service';
import { WotService } from './shared/wot.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = ' WorkPlace On Tour :)';

 @Input() oidcClient:OidConnectService

   @Input() tourDestinations$;

   @Input('userType') userType='Individual';

  constructor(
    private router:Router,
     private workplaces: WotService,
    private openIdConnectService: OidConnectService) {

      this.tourDestinations$= this.workplaces.getTourDestinations() 
    this.oidcClient=openIdConnectService;
  }



     redirectToIDP($event){

      let userType = $event.target.innerText;
      var path= window.location.pathname;
    
      if(path!="/signin-oidc"){
 
         if(!this.openIdConnectService.userAvailable)
           this.openIdConnectService.triggerSignIn(userType);

     }
  //  ngOnInit(){

      
  //  }
  }


 

  bookWorkplace(){
    this.router.navigate(['/workplacebooking']);
  }
}
