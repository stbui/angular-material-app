import { Component, Input, Output, EventEmitter } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'stbui-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.scss']
})
export class CountDownComponent {
  disabled: boolean = false;

  @Input() delay: number = 60;
  @Input() text: any = '获取验证码';

  @Output() onEnd: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  onClickTrigger() {
    // const interval$ = interval(1000)
    //   .mapTo(-1)
    //   .startWith(this.delay)
    //   .scan((acc, curr) => {
    //     return curr + acc;
    //   })
    //   .take(this.delay + 1)
    //   .do(timer => {
    //     this.disabled = true;
    //   });

    // interval$.subscribe(state => {
    //   this.text = `${state}s`;
    //   if (state == 0) {
    //     this.disabled = false;
    //     this.text = '获取验证码';
    //     this.onEnd.emit();
    //   }
    // });
  }
}
