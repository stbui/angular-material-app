import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from "rxjs/Observable";

@Injectable()
export class AnalysisService {

  private apiUrl = '/assets/data/analysis';
  private _crowdApplist$: BehaviorSubject<any>;
  private _crowdCateList$: BehaviorSubject<any>;

  get crowdApplist$() {
    return this._crowdApplist$.asObservable();
  }

  get crowdCateList$() {
    return this._crowdCateList$.asObservable();
  }

  constructor(private _http: Http) {
    this._crowdApplist$ = new BehaviorSubject<any>([]);
    this._crowdCateList$ = new BehaviorSubject<any>([]);
  }

  getCrowdAppList() {
    const url = `${this.apiUrl}/crowdAppList.json`;
    return this._http.get(url).map(res => res.json().datas).subscribe(res => {
      this._crowdApplist$.next(res);
    });
  }

  getCrowdCateList() {
    const url = `${this.apiUrl}/crowdCateList.json`;
    return this._http.get(url).map(res => res.json().datas).subscribe(res => {
      this._crowdCateList$.next(res);
    });
  }
}
