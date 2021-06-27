import { WotService } from '../shared/wot.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-workplaces',
  templateUrl: './workplaces.component.html',
  styleUrls: ['./workplaces.component.css']
})
export class WorkplacesComponent  implements OnInit {


  @Input() tourDestinations$;

  workplaces$;
  workplaces = {}; 
  TourId;

  constructor(
    private router: Router, 
    private route: ActivatedRoute,
    private  wotService: WotService) {
   
      this.tourDestinations$= this.wotService.getTourDestinations();
  }


   ngOnInit(){

    // this.TourId = this.route.snapshot.paramMap.get('tourId');
    // if (this.TourId) this.wotService.getWorkPlaces(this.TourId).subscribe(w => this.workplaces = w);
    // console.log(this.workplaces);

   }
}
