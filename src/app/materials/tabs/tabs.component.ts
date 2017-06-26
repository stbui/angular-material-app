import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  step1:boolean=false;
  step2:boolean=false;
  selectedIndex:number = 0;

  constructor() { }

  ngOnInit() {
  }

  onNextStepTriggered() {
    this.step1 = true;
    this.selectedIndex += 1;
  }

  onPreviousStepTriggered() {
    this.step1 = false;
    this.selectedIndex -= 1;
  }
}
