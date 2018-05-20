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

@Component({
  selector: 'stbui-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DatePickerComponent {
  _mode: 'portrait' | 'landscape' = 'portrait';
  landscape: boolean = false;

  @Input() action: boolean = false;

  @Input()
  set mode(value) {
    value = value == 'portrait' ? 'portrait' : 'landscape';
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
  @Output() selectValueChange = new EventEmitter();

  constructor() {}

  onCancelDatePicker(value) {
    this.onCanel.emit(value);
  }

  onConfirmDatePicker(value) {
    this.onConfirm.emit(value);
  }

  onSelectValueChange(value) {
    this.selectValueChange.emit(value);
  }
}
