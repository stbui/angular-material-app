import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../../environments/environment';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LeadService {

  private apiUrl = environment.crmApi;

  constructor(private _http: Http) {
  }

  getLead() {
    const url = `${this.apiUrl}/contacts.json`;
    return this._http.get(url).toPromise().then(res => res.json());
  }
}
