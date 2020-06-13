import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "stbui-count-down",
  templateUrl: "./count-down.component.html",
  styleUrls: ["./count-down.component.scss"],
})
export class CountDownComponent {
  disabled: boolean = false;

  @Input() delay: number = 60;
  @Input() text: any = "获取验证码";

  @Output() onEnd: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  onClickTrigger() {}
}
