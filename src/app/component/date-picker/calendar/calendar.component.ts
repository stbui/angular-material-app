import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'stbui-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
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

  constructor() { }

  isModeLandscape() {
    return this.mode;
  }

  ngOnInit() {
  }
}
