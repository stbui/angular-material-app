import { Component, Input } from '@angular/core';

@Component({
  selector: 'stb-widget-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss']
})

export class StateComponent {

  @Input() icon: string;
  @Input() backgroundcolor: string;
  @Input() changeicon: string;
  @Input() changepercent: string;
  @Input() property: string;
  @Input() textcolor: string;
  @Input() value: string;
  @Input() valueprefix: string;

  constructor() {

  }

}
