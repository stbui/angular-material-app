import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'analysis-crowd-consumer',
  templateUrl: './consumer.component.html',
  styleUrls: ['./consumer.component.scss']
})
export class ConsumerComponent implements OnInit {

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
