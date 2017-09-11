import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from "rxjs/Observable";

@Injectable()
export class CrowdService {

  private apiUrl: string = '/assets/data/analysis/crowd.json';
  private _crowd: BehaviorSubject<any>;

  get crowd() {
    return this._crowd.asObservable();
  }

  dataSource;

  constructor(private _http: Http) {
    this._crowd = new BehaviorSubject<any>([]);
  }

  getCrowd() {
    return this._http.get(this.apiUrl).map(res => res.json().datas).subscribe(res => {
      this._crowd.next(res);
    });
  }

  actvieDatas() {
    return this._http.get(this.apiUrl).map(res => res.json().datas.actvieDatas);
  }

  operators() {
    return this._http.get(this.apiUrl).map(res => res.json().datas.operators);
  }

  region() {
    return this._http.get(this.apiUrl).map(res => res.json().datas.region);
  }

  brand() {
    return this._http.get(this.apiUrl).map(res => res.json().datas.brand);
  }
}
