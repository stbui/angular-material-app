import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ChatService {

  private api = 'api';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {
  }

  getUser(): Promise<any> {
    return this.http
      .get(`${this.api}/user`, this.headers)
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  handleError() {

  }

}
