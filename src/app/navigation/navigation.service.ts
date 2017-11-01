import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class NavigationService {

  private _navigations: BehaviorSubject<any>;
  private apiUrl = environment.navigationApi;

  get navigations() {
    return this._navigations.asObservable();
  }

  constructor(private http: Http) {
    this._navigations = new BehaviorSubject<any>([]);
  }

  getNavs(topicId: any = '', page: any = 1) {
    let url = `${this.apiUrl}/links/?topicId=${topicId}&page=${page}`;
    if (!environment.production) {
      url = `${this.apiUrl}/links${topicId}${page}.json`;
    }
    this.http.get(url)
        .map(res => res.json())
        // .do(res => console.log(res))
        .subscribe(res => {
          this._navigations.next(res);
        });
  }

  getCategories() {
    let url = `${this.apiUrl}/topic`;
    if (!environment.production) {
      url = `${this.apiUrl}/topic.json`;
    }
    return this.http.get(url)
               .map(res => res.json());
  }
}
