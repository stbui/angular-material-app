import { Component, OnInit } from '@angular/core';
import { CollectionService } from './collection.service';

@Component({
  selector: 'apm-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {

  rows: any[];
  loadingIndicator = true;
  reorderable = true;

  selected = [];
  openDetail: boolean = false;
  detail = {};


  constructor(private service: CollectionService) {

  }

  ngOnInit() {
    this.service.getCollections();
    this.service.onCollectionsChangedSubject.subscribe(script => {
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
