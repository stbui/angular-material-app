import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { environment } from '../../../environments/environment';

import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-static',
  templateUrl: './static.component.html',
  styleUrls: ['./static.component.scss']
})
export class StaticComponent implements OnInit {

  data = {
    columns: [
      {
        key: 'appId',
        title: ''
      },
      {
        key: 'appName',
        title: 'APP'
      },
      {
        key: 'cateNames',
        title: '领域'
      },
      {
        key: 'developCompanyFullName',
        title: '开发商'
      },
      {
        key: 'activeNums',
        title: '活跃人数(万)'
      },
      {
        key: 'activeNumsRatio',
        title: '环比增幅(%)'
      }
    ],
    data: []
  };

  private apiUrl = environment.tableApi;

  constructor(private _http: Http) {
  }

  ngOnInit() {
    this.getQuery();
  }

  getQuery() {
    const url = `${this.apiUrl}/static.json`;
    this._http.get(url).toPromise().then(res => res.json()).then(res => {
      this.data.data = res;
    });
  }
}
