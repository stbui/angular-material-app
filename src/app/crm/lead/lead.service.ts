import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class LeadService {

  private apiUrl = '/assets/data/';

  constructor(private _http: Http) {
  }
}
