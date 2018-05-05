import {
  Component,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  ViewChild,
  OnInit
} from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-todo-search',
  templateUrl: './todo-search.component.html',
  styleUrls: ['./todo-search.component.scss']
})
export class TodoSearchComponent implements OnInit {
  inputValue: string = '';
  @Input() placeholder: string = '您的任务完成了吗？';
  @Input() delay: number = 200;

  @Output() textChanges = new EventEmitter<string>();
  @Output() onEnterUp = new EventEmitter<string>();

  @ViewChild('inputRef') _input: ElementRef;

  constructor() {}

  ngOnInit() {
    fromEvent(this._input.nativeElement, 'keyup')
      .pipe(map(() => this.inputValue), debounceTime(this.delay))
      .subscribe(input => this.textChanges.emit(input));
  }

  enterUp() {
    this.onEnterUp.emit(this.inputValue);
  }
}
