import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'stbui-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent {
  _mode: 'portrait' | 'landscape' = 'portrait';
  landscape: boolean = false;

  @Input()
  set mode(value) {
    value = (value == 'portrait') ? 'portrait' : 'landscape';
    if (value != this._mode) {
      this._mode = value;
    }

    if (value == 'landscape') {
      this.landscape = true;
    }
  }

  get mode() {
    return this._mode;
  }

  @Output() onCanel = new EventEmitter<any>();
  @Output() onConfirm = new EventEmitter<any>();

  constructor() {
  }

  onCancelDatePicker(value) {
    this.onCanel.emit(value);
  }

  onConfirmDatePicker(value) {
    this.onConfirm.emit(value);
  }

}
