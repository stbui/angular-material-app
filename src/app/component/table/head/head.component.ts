import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'stbui-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent {

  @Input() columns;

  constructor() {

  }
}
