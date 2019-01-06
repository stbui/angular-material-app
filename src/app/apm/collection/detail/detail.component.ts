import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'apm-collection-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  detailColumns: string[] = ['name', 'value'];

  @Input() eventDataSource = [];
  @Input() devicesDataSource = [];

  constructor() {}

  ngOnInit() {}
}
