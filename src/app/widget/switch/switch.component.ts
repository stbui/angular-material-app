import { Component, Input } from '@angular/core';

@Component({
  selector: 'stb-widget-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})

export class SwitchComponent {

  @Input() icon: string;
  @Input() backgroundcolor: string;
  @Input() property: string;
  @Input() value: string;

  constructor() {

  }

}
