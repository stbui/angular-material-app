import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as dateUtils from '../dateUtils';

@Component({
  selector: 'stbui-calendar-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.scss']
})
export class MonthComponent {
  weeksArray;
  selected = false;

  @Output() selectValueChange: EventEmitter<any> = new EventEmitter<any>();

  @Input()
  set displayDate(val) {
    this.weeksArray = dateUtils.getWeekArray(val || new Date(), 1);
  }
  get displayDate() {
    return this.weeksArray;
  }

  constructor() {}

  onselectValueChange(event) {
    this.selectValueChange.emit(event.value);
  }
}
