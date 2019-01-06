import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'apm-performance-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  analysisDom_time = 62;
  count = 13;
  dns_time = 0;
  dom_time = 72.38461538461539;
  load_time = 134.15384615384616;
  ready_time = 4.538461538461538;
  request_time = 4.923076923076923;
  tcp_time = 0;
  white_time = 9.153846153846153;

  constructor() {}

  ngOnInit() {}
}
