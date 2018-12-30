import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'stbui-customizer',
  templateUrl: './customizer.component.html',
  styleUrls: ['./customizer.component.scss']
})
export class CustomizerComponent implements OnInit {
  @Input() settings: any;

  _colors: any = ['primary', 'accent', 'red', 'blue', 'orange', 'material'];

  constructor() {}

  ngOnInit() {}
}
