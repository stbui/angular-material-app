import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'error-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  @Input() opened: boolean = false;
  @Output() onOpened = new EventEmitter();

  displayedColumns: string[] = ['name', 'value'];
  dataSource = [
    {
      name: '时间',
      value: '2017-09-11T03:35:03.155Z'
    },
    {
      name: '事件类型',
      value: 'resourceError'
    },
    {
      name: 'method',
      value: 'GET'
    }
  ];

  devicesDataSource = [
    {
      name: 'IP',
      value: '127.0.0.1'
    },
    {
      name: '地区',
      value: '中国'
    },
    {
      name: '浏览器',
      value: 'chrome 61.0.3163.100'
    }
  ];

  constructor() {}

  ngOnInit() {}

  onCloseTriggered() {
    this.opened = false;
    this.onOpened.emit(this.opened);
  }
}
