import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class LeadService {

  private apiUrl = environment.crmApi;

  constructor(private _http: HttpClient) {
  }

  getLead() {
    const url = `${this.apiUrl}/contacts.json`;
    return this._http.get(url).toPromise();
  }
}
