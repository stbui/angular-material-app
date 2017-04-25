import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { environment } from '../../environments/environment';

@Injectable()
export class MailService {

  private apiUrl = environment.mailApi + '/mail';

  constructor(private http: Http) {
  }

  getMails() {
  }

  send() {
  }

  delete() {
  }

  save() {
  }

}
