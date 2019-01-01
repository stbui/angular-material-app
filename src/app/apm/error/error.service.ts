import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const DATA = [
  {
    _id: '59b60467b071180fb66c6272',
    releaseStage: 'production',
    firstSeen: '2017-09-11T03:35:03.155Z',
    status: 'open',
    name: null,
    type: 'resourceError',
    src: 'https://stbui.com/img/wechat.JPG',
    statusCode: 0,
    statusText: null,
    httpMethod: null,
    httpUrl: null,
    message: null,
    url: 'https://stbui.com/2016/07/10/mesos-marathon-platform/',
    severity: null,
    lastSeen: '2017-09-29T07:29:37.206Z',
    numberOfOccurence: 3,
    releaseStages: ['production'],
    numberOfUser: 3,
    elapsedTime: '77391.385'
  },
  {
    _id: '59b60467b071180fb66c6272',
    releaseStage: 'production',
    firstSeen: '2017-09-11T03:35:03.155Z',
    status: 'open',
    name: null,
    type: 'resourceError',
    src: 'https://stbui.com/img/wechat.JPG',
    statusCode: 0,
    statusText: null,
    httpMethod: null,
    httpUrl: null,
    message: null,
    url: 'https://stbui.com/2016/07/10/mesos-marathon-platform/',
    severity: null,
    lastSeen: '2017-09-29T07:29:37.206Z',
    numberOfOccurence: 3,
    releaseStages: ['production'],
    numberOfUser: 3,
    elapsedTime: '77391.385'
  }
];

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  errors = new BehaviorSubject([]);
  constructor() {}

  getList() {
    this.errors.next(DATA);
    return this.errors;
  }
}
