import {
  Component,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  ViewChild,
  AfterViewInit
} from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'stbui-search, stb-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements AfterViewInit {
  inputValue;

  @Input() placeholder: string = '查找...';
  @Input() delay: number = 200;
  @Output() onSearch: EventEmitter<any> = new EventEmitter<any>();
  @Output() onSearchChange: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild('inputRef') inputRef: ElementRef;

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    fromEvent(this.inputRef.nativeElement, 'keyup')
      .pipe(
        map(() => this.inputValue),
        debounceTime(this.delay),
        distinctUntilChanged()
      )
      .subscribe(input => console.log(input));
  }

  enterUp() {
    this.onSearch.emit(this.inputValue);
  }
}
