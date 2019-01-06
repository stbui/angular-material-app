import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'apm-script-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  detailColumns: string[] = ['name', 'value'];
  @Input() eventDataSource = [
    {
      name: '生成时间',
      value: ''
    },
    {
      name: '错误类型',
      value: ''
    },
    {
      name: '错误信息',
      value: ''
    },
    {
      name: '错误资源',
      value: ''
    },
    {
      name: '出错行号',
      value: ''
    },
    {
      name: '出错列号',
      value: ''
    },
    {
      name: '错误详情',
      value: ''
    }
  ];

  @Input() devicesDataSource = [
    {
      name: 'IP地址',
      value: ''
    },
    {
      name: '来源城市',
      value: ''
    },
    {
      name: '浏览器',
      value: ''
    },
    {
      name: '操作系统',
      value: ''
    },
    {
      name: 'language',
      value: ''
    },
    {
      name: 'userAgent',
      value: ''
    }
  ];

  constructor() {}

  ngOnInit() {}
}
