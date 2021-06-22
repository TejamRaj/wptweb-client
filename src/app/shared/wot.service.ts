import { BaseService } from './base.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WotService extends BaseService {

  constructor(private http: HttpClient) { 
    super();
  }

    TourDestinations$;

   getTourDestinations(){
      return this.http.get(`${this.apiUrl}/Wot`)
    
   }
}
