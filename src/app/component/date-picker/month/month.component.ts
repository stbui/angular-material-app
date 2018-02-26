import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as dateUtils from '../dateUtils';

@Component({
  selector: 'stbui-calendar-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.scss']
})
export class MonthComponent {
  weeksArray;

  @Output() selectValueChange: EventEmitter<any> = new EventEmitter<any>();

  @Input()
  set displayDate(val) {
    this.weeksArray = dateUtils.getWeekArray(val || new Date(), 1);
    this.weeksArray = this.weeksArray.map(weeks => {
      return weeks.map(day => {
        return { selected: false, day };
      });
    });
  }
  get displayDate() {
    return this.weeksArray;
  }

  constructor() {}

  isNow(date) {
    const now = new Date();
    return (
      date &&
      date.getFullYear() === now.getFullYear() &&
      date.getMonth() === now.getMonth() &&
      date.getDate() === now.getDate()
    );
  }

  coerceBooleanProperty(value) {
    return value != null && `${value}` !== 'false';
  }

  onSelectValueChange(event) {
    if(!this.coerceBooleanProperty(event.day)) {
      return false;
    }
    for (let weeks of this.weeksArray) {
      for (let day of weeks) {
        day.selected = false;
      }
    }
    event.selected = true;
    this.selectValueChange.emit(event.day);
  }
}
