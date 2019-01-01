import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable()
export class LeadService {
  private apiUrl = environment.crmApi;
  list: any = new BehaviorSubject([]);

  constructor(private _http: HttpClient) {}

  getList() {
    const url = `${this.apiUrl}/contacts.json`;
    this._http.get(url);

    const DATA = [];
    for (let i = 0; i < 50; i++) {
      DATA.push({
        name: '姓名' + i,
        company: '公司名称' + i,
        tel: '电话' + i,
        phone: '手机' + i,
        status_mapped: '跟进状态' + i,
        lastest_revisit_log: '最新跟进记录' + i,
        real_revisit_at: '实际跟进时间' + i,
        revisit_remind_at: '下次跟进时间' + i
      });
    }

    this.list.next(DATA);
    return this.list;
  }
}
