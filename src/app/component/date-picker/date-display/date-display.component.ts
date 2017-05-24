import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'stbui-date-display',
  templateUrl: './date-display.component.html',
  styleUrls: ['./date-display.component.scss']
})
export class DateDisplayComponent implements OnInit {

  @Input() displayDates;

  constructor() { }

  ngOnInit() {
  }

}
