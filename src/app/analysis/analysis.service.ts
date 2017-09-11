import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AnalysisService {

  private apiUrl = '/assets/data/analysis';

  constructor(private _http: Http) {
  }

  getCrowdAppList() {
    const url = `${this.apiUrl}/crowdAppList.json`;
    return this._http.get(url);
  }

  getCrowdCateList() {

  }
}
