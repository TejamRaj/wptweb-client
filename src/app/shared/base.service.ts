import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';



@Injectable()
export class BaseService {
  apiUrl = environment.apiUrl;

  constructor() { }
}
