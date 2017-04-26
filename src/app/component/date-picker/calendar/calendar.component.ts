import { Component,Input,ViewEncapsulation, OnInit } from '@angular/core';
import * as dateUtils from '../dateUtils'

@Component({
  selector: 'stbui-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CalendarComponent implements OnInit {

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

  constructor() { }

  isModeLandscape() {
    return this.mode;
  }

  ngOnInit() {
    const displayDate = dateUtils.cloneDate(new Date());
    // displayDate.setDate(1);
    this.displayDates = [displayDate];

    this.weeksArray = dateUtils.getWeekArray(displayDate || new Date(), 1);
    console.log(this.displayDates);
    console.log(this.weeksArray)
  }
}
