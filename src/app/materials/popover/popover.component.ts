import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../component/index';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss']
})
export class PopoverComponent implements OnInit {

  constructor(private _notification: NotificationService) {
  }

  ngOnInit() {
  }

  showNotication() {
    this._notification.show('测试消息', '测试标题');
  }

  clear() {
    this._notification.clear();
  }

}
