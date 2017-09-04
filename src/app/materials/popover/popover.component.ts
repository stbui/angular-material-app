import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../component/index';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss']
})
export class PopoverComponent implements OnInit {

  constructor(private _notification: NotificationService, private toastr: ToastrService) {
  }

  ngOnInit() {
    // this.toastr.success('Hello world!', 'Toastr fun!');
  }

  showSuccess() {
    this._notification.open('测试消息', '测试标题');
  }

}
