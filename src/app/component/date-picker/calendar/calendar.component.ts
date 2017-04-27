import {Component, Input, ViewEncapsulation, OnInit} from '@angular/core';
import { transitionAnimation } from '../transition.animation';

@Component({
  selector: 'stbui-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations:[ transitionAnimation]
})
export class CalendarComponent implements OnInit {

  private _currentlySelected = [];

  @Input() mode;
  @Input() displayDates;
  @Input() weeksArray;

  constructor() {
  }

  isModeLandscape() {
    if (this.mode == 'landscape') {
      return this.mode;
    } else {
      return this.mode;
    }
  }

  onDaySelected($event) {
    this.displayDates = [$event];
    this.toggleCurrentlySelected($event);
  }

  toggleCurrentlySelected(day) {

  }

  ngOnInit() {

  }
}
