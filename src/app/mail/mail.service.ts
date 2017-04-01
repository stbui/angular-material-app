import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class MailService {

  private apiUrl='http://127.0.0.1:3000/mail';

  constructor(private http: Http) { }

  getMails() {}

  send() {}

  delete() {}

  save() {}

}
