import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class LeadService {

  private apiUrl = environment.crmApi;

  constructor(private _http: Http) {
  }
}
