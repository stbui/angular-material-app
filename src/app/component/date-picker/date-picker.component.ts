import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'stbui-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit {

  @Input() mode;

  constructor() { }

  ngOnInit() {
  }

}
