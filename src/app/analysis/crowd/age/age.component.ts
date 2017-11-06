import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'analysis-crowd-age',
  templateUrl: './age.component.html',
  styleUrls: ['./age.component.scss']
})
export class AgeComponent implements OnInit {

  @Input() data: any;

  // options
  showLegend = true;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // pie
  showLabels = true;
  explodeSlices = false;
  doughnut = true;

  constructor() {
  }

  ngOnInit() {
  }

  onSelect(event) {
    console.log(event);
  }

}
