import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class UserService {
  private apiUrl = '/assets/data/pages';
  private _userList$: BehaviorSubject<any>;

  get userList$() {
    return this._userList$.asObservable();
  }

  constructor(private _http: HttpClient) {
    this._userList$ = new BehaviorSubject<any>([
      {
        key: 1,
        username: 'admin',
        nickname: '超级管理员',
        role: '超级管理员',
        email: 'admin@admin.com',
        phone: 13333333333,
        createTime: 11544880618883,
        status: 1
      },
      {
        key: 2,
        username: 'user',
        nickname: '管理员',
        role: '管理员',
        email: 'user@admin.com',
        phone: 13333333333,
        createTime: 11544880618883,
        status: 0
      }
    ]);
  }

  getUserList() {
    const url = `${this.apiUrl}/userList.json`;
    return this._userList$;
  }

  delete(user) {}
}
