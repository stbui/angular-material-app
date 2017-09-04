import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../component/index';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss']
})
export class PopoverComponent implements OnInit {

  options;

  constructor(private _notification: NotificationService) {
    this.options = _notification.config;
  }

  ngOnInit() {
  }

  showSuccess() {
    console.log(this.options)
    this._notification.open('测试消息', '测试标题');
  }

}
