import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'analysis-equipment-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class EquipmentBrandComponent implements OnInit {

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
