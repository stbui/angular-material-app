import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = environment.crmApi;
  list: any = new BehaviorSubject([]);

  constructor(private _http: HttpClient) {}

  getList() {
    const DATA = [
      {
        avatar:
          'https://lh5.googleusercontent.com/-hcRNe540rco/AAAAAAAAAAI/AAAAAAAAAAk/DfS45tpAR-A/photo.jpg',
        name: 'stbui',
        phone: '15890031275',
        relation: '优质客户',
        company: 'github',
        mail: 'admin@stbui.com'
      },
      {
        avatar:
          'https://lh5.googleusercontent.com/-hcRNe540rco/AAAAAAAAAAI/AAAAAAAAAAk/DfS45tpAR-A/photo.jpg',
        name: '赵日旭',
        phone: '15890030690',
        relation: '潜在客户',
        company: 'google',
        mail: 'user@stbui.com'
      },
      {
        avatar:
          'https://lh5.googleusercontent.com/-hcRNe540rco/AAAAAAAAAAI/AAAAAAAAAAk/DfS45tpAR-A/photo.jpg',
        name: '赵茹君',
        phone: '15890031290',
        relation: '一般客户',
        company: 'facebook',
        mail: 'guest@stbui.com'
      }
    ];

    this.list.next(DATA);
    return this.list;
  }
}
