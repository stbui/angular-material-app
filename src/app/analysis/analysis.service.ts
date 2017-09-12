import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class AnalysisService {

  private apiUrl = '/assets/data/analysis';
  private _crowdApplist$: BehaviorSubject<any>;
  private _crowdCateList$: BehaviorSubject<any>;
  private _crowdDevice$: BehaviorSubject<any>;
  private _scenes$: BehaviorSubject<any>;

  get crowdApplist$() {
    return this._crowdApplist$.asObservable();
  }

  get crowdCateList$() {
    return this._crowdCateList$.asObservable();
  }

  get crowdDevice$() {
    return this._crowdDevice$.asObservable();
  }

  get scenes$() {
    return this._scenes$.asObservable();
  }

  constructor(private _http: Http) {
    this._crowdApplist$ = new BehaviorSubject<any>([]);
    this._crowdCateList$ = new BehaviorSubject<any>([]);
    this._crowdDevice$ = new BehaviorSubject<any>([]);
    this._scenes$ = new BehaviorSubject<any>([]);
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

  crowdDevice() {
    const url = `${this.apiUrl}/crowdDevice.json`;
    return this._http.get(url).map(res => res.json().datas).subscribe(res => {
      this._crowdDevice$.next(res);
    });
  }

  scenesData() {
    const url = `${this.apiUrl}/scenes.json`;
    return this._http.get(url).map(res => res.json().datas).subscribe(res => {
      this._scenes$.next(res);
    });
  }
}
