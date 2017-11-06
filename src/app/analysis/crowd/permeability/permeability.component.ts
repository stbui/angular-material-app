import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'analysis-crowd-permeability',
  templateUrl: './permeability.component.html',
  styleUrls: ['./permeability.component.scss']
})
export class PermeabilityComponent implements OnInit {

  @Input() data: any;

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() {
  }

  ngOnInit() {
  }

  onSelect(event) {
    console.log(event);
  }

}
