import {
  Component,
  Input,
  Output,
  EventEmitter,
  ElementRef
} from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'stbui-mobile-input',
  templateUrl: './mobile-input.component.html',
  styleUrls: ['./mobile-input.component.scss']
})
export class MobileInputComponent {
  private delay: number = 300;
  private regular: any = /^[1][3,4,5,7,8][0-9]{9}$/;

  @Input() placeholder: string = '请输入手机号码';
  @Input() disabled: boolean = false;
  @Input() value: string;

  @Output() valueChange: EventEmitter<any> = new EventEmitter<any>();

  constructor(private elementRef: ElementRef) {
    fromEvent(this.elementRef.nativeElement, 'keydown')
      .pipe(
        map(() => this.value),
        debounceTime(this.delay),
        distinctUntilChanged()
      )
      .subscribe(input =>
        this.valueChange.emit({
          value: input,
          isMobile: this.regular.test(input)
        })
      );
  }
}
