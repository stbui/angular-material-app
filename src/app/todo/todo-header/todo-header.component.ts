import {Component, Input, Output, EventEmitter, ElementRef} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.scss']
})
export class TodoHeaderComponent {
  inputValue: string = '';
  @Input() placeholder: string = '您的任务完成了吗？';
  @Input() delay: number = 200;

  @Output() textChanges = new EventEmitter<string>();
  @Output() onEnterUp = new EventEmitter<string>();

  constructor(private elementRef: ElementRef) {
    const event$ = Observable.fromEvent(elementRef.nativeElement, 'keyup')
      .map(() => this.inputValue)
      .debounceTime(this.delay)
      .distinctUntilChanged();
    event$.subscribe(input => this.textChanges.emit(input));
  }

  enterUp() {
    this.onEnterUp.emit(this.inputValue);
    this.inputValue = '';
  }
}
