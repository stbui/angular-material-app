import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class NavigationService {

  private _navigations: BehaviorSubject<any>;
  private apiUrl='http://127.0.0.1:8360/api/link?topicId=&page=1';

  get navigations() {
    return this._navigations.asObservable();
  }

  constructor(private http: Http) {
    this._navigations = new BehaviorSubject<any>([]);
  }

  getNavs() {
    this.http.get(this.apiUrl)
      .map(res => res.json().data)
      .do(res => console.log(res))
      .subscribe(res => {
        this._navigations.next(res);
      });
  }

}
