import { Component, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'stbui-search',
  templateUrl: './search.component.html',
  styleUrls: [ './search.component.scss' ]
})
export class SearchComponent {

  inputValue;

  @Input() placeholder:string = '查找...';
  @Input() delay:number = 200;
  @Output() onSearch = new EventEmitter();
  @Output() onSearchChange = new EventEmitter();

  constructor(private elementRef:ElementRef) {
    const event$ = Observable.fromEvent(elementRef.nativeElement, 'keyup')
      .map(() => this.inputValue)
      .debounceTime(this.delay)
      .distinctUntilChanged();
    event$.subscribe(input => this.onSearchChange.emit(input));
  }

  enterUp() {
    this.onSearch.emit(this.inputValue);
  }

}
