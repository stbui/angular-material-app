/**
 * @license
 * Copyright Stbui All Rights Reserved.
 * https://github.com/stbui
 */

 import {
  Component,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  ViewChild,
  AfterViewInit,
  ViewEncapsulation
} from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'stbui-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  host: {
    class: 'stbui-search'
  },
  encapsulation: ViewEncapsulation.None
})
export class SearchComponent implements AfterViewInit {
  inputValue: string | number;

  @Input() placeholder: string = '查找...';
  @Input() delay: number = 200;
  @Output() onSearch: EventEmitter<string | number> = new EventEmitter<string | number>();
  @Output() onSearchChange: EventEmitter<string | number> = new EventEmitter<string | number>();

  @ViewChild('inputRef') inputRef: ElementRef;

  constructor() {}

  ngAfterViewInit() {
    fromEvent(this.inputRef.nativeElement, 'keyup')
      .pipe(
        map(() => this.inputValue),
        debounceTime(this.delay),
        distinctUntilChanged()
      )
      .subscribe(input => this.onSearchChange.emit(input));
  }

  enterUp() {
    this.onSearch.emit(this.inputValue);
  }
}
