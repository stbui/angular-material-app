import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'error-detail,stbui-error-detail,stb-error-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {

  @Input() opened: boolean = false;
  @Output() onOpened = new EventEmitter();

  count = 0;

  constructor() {
  }

  ngOnInit() {

  }

  // 自定义的方法，检测和处理值的改变
  ngDoCheck() {
    this.count += 1;
  }

  // 在组件内容初始化之后调用
  ngAfterContentInit() {

  }

  // 组件每次检查内容时调用
  ngAfterContentChecked() {

  }

  // 组件相应的视图初始化之后调用
  ngAfterViewInit() {

  }

  // 组件每次检查视图时调用
  ngAfterViewChecked() {

  }

  onCloseTriggered() {
    this.opened = false;
    this.onOpened.emit(this.opened);
  }

}
