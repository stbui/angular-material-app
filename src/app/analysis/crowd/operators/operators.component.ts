import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'analysis-crowd-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.scss']
})
export class OperatorsComponent implements OnInit {
  @Input() data: any;

  // options
  showLegend = true;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // pie
  showLabels = true;
  explodeSlices = false;
  doughnut = false;

  constructor() {
  }

  ngOnInit() {
  }

  onSelect(event) {
    console.log(event);
  }

}
