import { Component, OnInit } from '@angular/core';
import { PerformanceService } from './performance.service';

@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.scss']
})
export class PerformanceComponent implements OnInit {

  rows: any[];
  loadingIndicator = true;
  reorderable = true;

  selected = [];
  openDetail: boolean = false;
  detail = {};


  constructor(private service: PerformanceService) {

  }

  ngOnInit() {
    this.service.getPerformances();
    this.service.onPerformancesChangedSubject.subscribe(script => {
      this.rows = script.data;
      this.loadingIndicator = false;
    });
  }

  onSelect({ selected }) {
    console.log('Select Event', selected);
    this.selected = selected;
    this.detail = selected[0];
    this.openDetail = true;
  }

  onOpenedTriggered(opened) {
    this.openDetail = opened;
  }

  onClickOutside(e) {
    this.openDetail = false;
  }

}
