import { Observable,throwError } from 'rxjs';
import { Workplace } from './workplace.model';
import { BaseService } from './base.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class WorkplaceService extends BaseService {


   Workplace:Observable<Workplace[]>;

  constructor(private http: HttpClient) { 
    super();
  } 

  getWorkplaces(tourId: string): Observable<Workplace[]> {

     return this.http.get(`${this.apiUrl}/Workplace/${tourId}`)
     .pipe(
       map((data: Workplace[]) => {
         return data;
       }), catchError( error => {
         return throwError( 'Capital not found!' );
       })
      )
  
   }
 

 
}
