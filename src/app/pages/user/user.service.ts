import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class UserService {

  private apiUrl = '/assets/data/pages';
  private _userList$: BehaviorSubject<any>;

  get userList$() {
    return this._userList$.asObservable();
  }


  constructor(private _http: Http) {
    this._userList$ = new BehaviorSubject<any>([]);
  }

  getUserList() {
    const url = `${this.apiUrl}/userList.json`;
    return this._http.get(url).map(res => res.json()).subscribe(res => {
      this._userList$.next(res);
    });
  }

}
