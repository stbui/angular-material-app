import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const DATA = [
  {
    name: '监控系统',
    apiKey: 'PkbX57vcmcMJijAHidUbEEUwh5TWTojo',
    url: 'http://127.0.0.1',
    createTime: 1515044877551
  },
  {
    name: '运营系统',
    apiKey: 'bKAXK5Jj99vLHzmZKDgiGfvxhAnQE9IC',
    url: 'http://127.0.0.1',
    createTime: 1515044877551
  },
  {
    name: '运营系统',
    apiKey: 'bKAXK5Jj99vLHzmZKDgiGfvxhAnQE9IC',
    url: 'http://127.0.0.1',
    createTime: 1515044877551
  },
  {
    name: '运营系统',
    apiKey: 'bKAXK5Jj99vLHzmZKDgiGfvxhAnQE9IC',
    url: 'http://127.0.0.1',
    createTime: 1515044877551
  },
  {
    name: '运营系统',
    apiKey: 'bKAXK5Jj99vLHzmZKDgiGfvxhAnQE9IC',
    url: 'http://127.0.0.1',
    createTime: 1515044877551
  },
  {
    name: '运营系统',
    apiKey: 'bKAXK5Jj99vLHzmZKDgiGfvxhAnQE9IC',
    url: 'http://127.0.0.1',
    createTime: 1515044877551
  },
  {
    name: '运营系统',
    apiKey: 'bKAXK5Jj99vLHzmZKDgiGfvxhAnQE9IC',
    url: 'http://127.0.0.1',
    createTime: 1515044877551
  },
  {
    name: '运营系统',
    apiKey: 'bKAXK5Jj99vLHzmZKDgiGfvxhAnQE9IC',
    url: 'http://127.0.0.1',
    createTime: 1515044877551
  },
  {
    name: '运营系统',
    apiKey: 'bKAXK5Jj99vLHzmZKDgiGfvxhAnQE9IC',
    url: 'http://127.0.0.1',
    createTime: 1515044877551
  },
  {
    name: '运营系统',
    apiKey: 'bKAXK5Jj99vLHzmZKDgiGfvxhAnQE9IC',
    url: 'http://127.0.0.1',
    createTime: 1515044877551
  },
  {
    name: '运营系统',
    apiKey: 'bKAXK5Jj99vLHzmZKDgiGfvxhAnQE9IC',
    url: 'http://127.0.0.1',
    createTime: 1515044877551
  },
  {
    name: '运营系统',
    apiKey: 'bKAXK5Jj99vLHzmZKDgiGfvxhAnQE9IC',
    url: 'http://127.0.0.1',
    createTime: 1515044877551
  },
  {
    name: '运营系统',
    apiKey: 'bKAXK5Jj99vLHzmZKDgiGfvxhAnQE9IC',
    url: 'http://127.0.0.1',
    createTime: 1515044877551
  },
  {
    name: '运营系统',
    apiKey: 'bKAXK5Jj99vLHzmZKDgiGfvxhAnQE9IC',
    url: 'http://127.0.0.1',
    createTime: 1515044877551
  },
  {
    name: '运营系统',
    apiKey: 'bKAXK5Jj99vLHzmZKDgiGfvxhAnQE9IC',
    url: 'http://127.0.0.1',
    createTime: 1515044877551
  },
  {
    name: '运营系统',
    apiKey: 'bKAXK5Jj99vLHzmZKDgiGfvxhAnQE9IC',
    url: 'http://127.0.0.1',
    createTime: 1515044877551
  },
  {
    name: '运营系统',
    apiKey: 'bKAXK5Jj99vLHzmZKDgiGfvxhAnQE9IC',
    url: 'http://127.0.0.1',
    createTime: 1515044877551
  },
  {
    name: '运营系统',
    apiKey: 'bKAXK5Jj99vLHzmZKDgiGfvxhAnQE9IC',
    url: 'http://127.0.0.1',
    createTime: 1515044877551
  },
  {
    name: '运营系统',
    apiKey: 'bKAXK5Jj99vLHzmZKDgiGfvxhAnQE9IC',
    url: 'http://127.0.0.1',
    createTime: 1515044877551
  },
  {
    name: '运营系统',
    apiKey: 'bKAXK5Jj99vLHzmZKDgiGfvxhAnQE9IC',
    url: 'http://127.0.0.1',
    createTime: 1515044877551
  },
  {
    name: '运营系统',
    apiKey: 'bKAXK5Jj99vLHzmZKDgiGfvxhAnQE9IC',
    url: 'http://127.0.0.1',
    createTime: 1515044877551
  },
  {
    name: '运营系统',
    apiKey: 'bKAXK5Jj99vLHzmZKDgiGfvxhAnQE9IC',
    url: 'http://127.0.0.1',
    createTime: 1515044877551
  },
  {
    name: '运营系统',
    apiKey: 'bKAXK5Jj99vLHzmZKDgiGfvxhAnQE9IC',
    url: 'http://127.0.0.1',
    createTime: 1515044877551
  },
  {
    name: '运营系统',
    apiKey: 'bKAXK5Jj99vLHzmZKDgiGfvxhAnQE9IC',
    url: 'http://127.0.0.1',
    createTime: 1515044877551
  },
  {
    name: '运营系统',
    apiKey: 'bKAXK5Jj99vLHzmZKDgiGfvxhAnQE9IC',
    url: 'http://127.0.0.1',
    createTime: 1515044877551
  },
  {
    name: '运营系统',
    apiKey: 'bKAXK5Jj99vLHzmZKDgiGfvxhAnQE9IC',
    url: 'http://127.0.0.1',
    createTime: 1515044877551
  },
  {
    name: '运营系统',
    apiKey: 'bKAXK5Jj99vLHzmZKDgiGfvxhAnQE9IC',
    url: 'http://127.0.0.1',
    createTime: 1515044877551
  },
  {
    name: '运营系统',
    apiKey: 'bKAXK5Jj99vLHzmZKDgiGfvxhAnQE9IC',
    url: 'http://127.0.0.1',
    createTime: 1515044877551
  },
  {
    name: '运营系统',
    apiKey: 'bKAXK5Jj99vLHzmZKDgiGfvxhAnQE9IC',
    url: 'http://127.0.0.1',
    createTime: 1515044877551
  },
  {
    name: '运营系统',
    apiKey: 'bKAXK5Jj99vLHzmZKDgiGfvxhAnQE9IC',
    url: 'http://127.0.0.1',
    createTime: 1515044877551
  },
  {
    name: '运营系统',
    apiKey: 'bKAXK5Jj99vLHzmZKDgiGfvxhAnQE9IC',
    url: 'http://127.0.0.1',
    createTime: 1515044877551
  },
  {
    name: '运营系统',
    apiKey: 'bKAXK5Jj99vLHzmZKDgiGfvxhAnQE9IC',
    url: 'http://127.0.0.1',
    createTime: 1515044877551
  },
  {
    name: '运营系统',
    apiKey: 'bKAXK5Jj99vLHzmZKDgiGfvxhAnQE9IC',
    url: 'http://127.0.0.1',
    createTime: 1515044877551
  },
  {
    name: '运营系统',
    apiKey: 'bKAXK5Jj99vLHzmZKDgiGfvxhAnQE9IC',
    url: 'http://127.0.0.1',
    createTime: 1515044877551
  },
  {
    name: '运营系统',
    apiKey: 'bKAXK5Jj99vLHzmZKDgiGfvxhAnQE9IC',
    url: 'http://127.0.0.1',
    createTime: 1515044877551
  },
  {
    name: '运营系统',
    apiKey: 'bKAXK5Jj99vLHzmZKDgiGfvxhAnQE9IC',
    url: 'http://127.0.0.1',
    createTime: 1515044877551
  },
  {
    name: '运营系统',
    apiKey: 'bKAXK5Jj99vLHzmZKDgiGfvxhAnQE9IC',
    url: 'http://127.0.0.1',
    createTime: 1515044877551
  },
  {
    name: '运营系统',
    apiKey: 'bKAXK5Jj99vLHzmZKDgiGfvxhAnQE9IC',
    url: 'http://127.0.0.1',
    createTime: 1515044877551
  },
  {
    name: '运营系统',
    apiKey: 'bKAXK5Jj99vLHzmZKDgiGfvxhAnQE9IC',
    url: 'http://127.0.0.1',
    createTime: 1515044877551
  },
  {
    name: '运营系统',
    apiKey: 'bKAXK5Jj99vLHzmZKDgiGfvxhAnQE9IC',
    url: 'http://127.0.0.1',
    createTime: 1515044877551
  },
  {
    name: '运营系统',
    apiKey: 'bKAXK5Jj99vLHzmZKDgiGfvxhAnQE9IC',
    url: 'http://127.0.0.1',
    createTime: 1515044877551
  },
  {
    name: '运营系统',
    apiKey: 'bKAXK5Jj99vLHzmZKDgiGfvxhAnQE9IC',
    url: 'http://127.0.0.1',
    createTime: 1515044877551
  },
  {
    name: '运营系统',
    apiKey: 'bKAXK5Jj99vLHzmZKDgiGfvxhAnQE9IC',
    url: 'http://127.0.0.1',
    createTime: 1515044877551
  },
  {
    name: '运营系统',
    apiKey: 'bKAXK5Jj99vLHzmZKDgiGfvxhAnQE9IC',
    url: 'http://127.0.0.1',
    createTime: 1515044877551
  },
  {
    name: '运营系统',
    apiKey: 'bKAXK5Jj99vLHzmZKDgiGfvxhAnQE9IC',
    url: 'http://127.0.0.1',
    createTime: 1515044877551
  },
  {
    name: '运营系统',
    apiKey: 'bKAXK5Jj99vLHzmZKDgiGfvxhAnQE9IC',
    url: 'http://127.0.0.1',
    createTime: 1515044877551
  },
  {
    name: '运营系统',
    apiKey: 'bKAXK5Jj99vLHzmZKDgiGfvxhAnQE9IC',
    url: 'http://127.0.0.1',
    createTime: 1515044877551
  },
  {
    name: '电销系统',
    apiKey: 'Hf63HpCWoN4pDEV_2s0KYwXx_rj95569',
    url: 'http://127.0.0.1',
    createTime: 1515044877551
  }
];

@Injectable({
  providedIn: 'root'
})
export class ManageService {
  list: any = new BehaviorSubject([]);
  constructor() {}

  getList() {
    this.list.next(DATA);
    return this.list;
  }
}
