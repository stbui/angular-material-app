import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'stbui-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {

  @Input() columns;

  constructor() {

  }
}
