import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeZh from '@angular/common/locales/zh';

import {
  CalendarEvent,
  CalendarEventTimesChangedEvent
} from 'angular-calendar';
import { Subject } from 'rxjs';

registerLocaleData(localeZh);

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CalendarComponent implements OnInit {
  view: string = 'month';
  refresh: Subject<any> = new Subject();
  activeDayIsOpen: boolean = true;
  viewDate: Date = new Date();
  events: any[] = [];

  handleEvent(action: string, event: CalendarEvent): void {}

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {}

  eventTimesChanged({
    event,
    newStart,
    newEnd
  }: CalendarEventTimesChangedEvent): void {}

  constructor() {}

  ngOnInit() {}
}
