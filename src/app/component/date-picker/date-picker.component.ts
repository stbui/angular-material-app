import {Component, Input, OnInit} from '@angular/core';
import * as dateUtils from './dateUtils'

@Component({
  selector: 'stbui-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit {
  private _mode: 'portrait' | 'landscape' = 'portrait';

  @Input()
  set mode(value) {
    value = (value == 'portrait') ? 'portrait' : 'landscape';
    if (value != this._mode) {
      this._mode = value;
    }
  }

  get mode() {
    return this._mode;
  }

  private displayDates;
  private weeksArray;

  constructor() {
  }


  ngOnInit() {
    const displayDate = dateUtils.cloneDate(new Date());
    // displayDate.setDate(1);
    this.displayDates = [displayDate];

    this.weeksArray = dateUtils.getWeekArray(displayDate || new Date(), 1);
  }

}
