import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class MailService {
  private _mails: BehaviorSubject<any>;
  private apiUrl = environment.mailApi;

  get mails() {
    return this._mails.asObservable();
  }

  constructor(private http: HttpClient) {
    this._mails = new BehaviorSubject<any>([]);
  }

  getMails() {
    const url = this.apiUrl;
    this.http.get(url).subscribe(res => this._mails.next(res));
  }
}
