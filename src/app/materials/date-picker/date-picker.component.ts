import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit {
  result;

  constructor() {}

  ngOnInit() {}

  onSelectValueChange(value) {
    this.result = value;
  }
  onConfirm(value) {
    this.result = value;
  }
}
