import { Component, Input } from '@angular/core';

@Component({
  selector: 'stbui-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent {
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


  constructor() {
  }

  handleClick() {
    console.log(1)
  }

}
