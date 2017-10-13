import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.scss']
})
export class PerformanceComponent implements OnInit {

  data = {
    columns: [
      {
        title: '资源地址'
      },
      {
        title: '响应时间'
      },
      {
        title: 'DNS时间'
      },
      {
        title: '白屏时间'
      },
      {
        title: '资源加载时间'
      }
    ],
    datas: [
      {
        id: '1',
        url: 'http://127.0.0.1:4200/stbui.bundle.css',
        dns: '225',
        response: '153',
        load: '465',
        black_waiting_time: '545'
      },
      {
        id: '1',
        url: 'http://127.0.0.1:4200/stbui.bundle.css',
        dns: '225',
        response: '153',
        load: '465',
        black_waiting_time: '545'
      },
      {
        id: '1',
        url: 'http://127.0.0.1:4200/stbui.bundle.css',
        dns: '225',
        response: '153',
        load: '465',
        black_waiting_time: '545'
      },
      {
        id: '1',
        url: 'http://127.0.0.1:4200/stbui.bundle.css',
        dns: '225',
        response: '153',
        load: '465',
        black_waiting_time: '545'
      },
      {
        id: '1',
        url: 'http://127.0.0.1:4200/stbui.bundle.css',
        dns: '225',
        response: '153',
        load: '465',
        black_waiting_time: '545'
      },
      {
        id: '1',
        url: 'http://127.0.0.1:4200/stbui.bundle.css',
        dns: '225',
        response: '153',
        load: '465',
        black_waiting_time: '545'
      }, {
        id: '1',
        url: 'http://127.0.0.1:4200/stbui.bundle.css',
        dns: '225',
        response: '153',
        load: '465',
        black_waiting_time: '545'
      }
    ]
  };

  constructor() {
  }

  ngOnInit() {
  }

  onDetailTriggered() {

  }

}
