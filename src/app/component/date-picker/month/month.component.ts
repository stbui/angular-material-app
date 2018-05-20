/**
 * @license
 * Copyright Stbui All Rights Reserved.
 */

import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation
} from '@angular/core';
import { getWeekArray } from '../dateUtils';

@Component({
  selector: 'stbui-calendar-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MonthComponent {
  weeksArray;

  @Output() selectValueChange: EventEmitter<any> = new EventEmitter<any>();

  @Input()
  set displayDate(val) {
    this.weeksArray = getWeekArray(val || new Date(), 1);
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

  isNow(date: Date): boolean {
    const now = new Date();
    return (
      date &&
      date.getFullYear() === now.getFullYear() &&
      date.getMonth() === now.getMonth() &&
      date.getDate() === now.getDate()
    );
  }

  coerceBooleanProperty(value): boolean {
    return value != null && `${value}` !== 'false';
  }

  onSelectValueChange(event) {
    if (!this.coerceBooleanProperty(event.day)) {
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
