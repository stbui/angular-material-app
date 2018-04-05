import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../component';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  title: string = '测试标题';
  message: string = '测试消息';
  duration: number = 3000;
  position: any;
  type: string;

  constructor(private _notification: NotificationService) {
  }

  ngOnInit() {
  }


  show() {
    console.log(this.position);
    this._notification.open(this.message, this.title, {
      duration: this.duration
    }, this.type);
  }

  success() {
    this._notification.success('测试消息', '测试标题');
  }

  warn() {
    this._notification.warn('测试消息', '测试标题');
  }

  clear() {
    this._notification.dismiss();
  }

}
