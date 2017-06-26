import { Component, Input, Output, EventEmitter } from '@angular/core';
import * as dateUtils from '../dateUtils';

@Component({
  selector: 'stbui-calendar-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.scss']
})
export class MonthComponent {

  private weeksArray;

  @Output() selected = new EventEmitter();

  @Input()
  set displayDate(val) {
    this.weeksArray = dateUtils.getWeekArray(val || new Date(), 1);
  }
  get displayDate() {
    return this.weeksArray;
  }


  constructor() { }

  onSelectedTrigger(date) {
    if (date) {
      this.selected.emit(date);
    }
  }

}
