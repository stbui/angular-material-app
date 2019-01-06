import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {
  MatPaginator,
  MatTableDataSource,
  MatSidenav
} from '@angular/material';
import { merge, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { SearchComponent } from '../../component';
import { PerformanceService } from './performance.service';

@Component({
  selector: 'apm-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.scss']
})
export class PerformanceComponent implements OnInit {
  displayedColumns: string[] = [
    'url',
    'load_time',
    'white_time',
    'dom_time',
    'analysisDom_time',
    'dns_time',
    'tcp_time',
    'redirect_time',
    'unload_time',
    'request_time',
    'ready_time',
    'create_time',
    'start'
  ];
  dataSource: any = new MatTableDataSource([]);

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  devicesDataSource = [];
  eventDataSource = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSidenav) sidenav: MatSidenav;
  @ViewChild(SearchComponent) search: SearchComponent;

  analysisDom_time = 62;
  count = 13;
  dns_time = 0;
  dom_time = 72.38461538461539;
  load_time = 134.15384615384616;
  ready_time = 4.538461538461538;
  request_time = 4.923076923076923;
  tcp_time = 0;
  white_time = 9.153846153846153;

  // chart
  dataBrowserChart = [];
  // options
  showLegend = false;
  // pie
  showLabels = false;
  doughnut = false;

  constructor(private service: PerformanceService, private router: Router) {}

  ngOnInit() {
    this.search.onSearch.subscribe(() => (this.paginator.pageIndex = 0));

    merge(this.search.onSearch, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(search => {
          return this.service.getList(this.paginator.pageIndex, search);
        }),
        map(data => {
          this.isLoadingResults = false;
          this.isRateLimitReached = false;
          this.resultsLength = data.data.totalNum;
          return data.data.datalist;
        }),
        catchError(() => {
          this.isLoadingResults = false;
          this.isRateLimitReached = true;
          return observableOf([]);
        })
      )
      .subscribe(data => (this.dataSource = data));

    this.dataBrowserChart.push({ name: 'Chrome', value: 13 });
    this.dataBrowserChart.push({ name: 'IE', value: 1 });
  }

  onRowClicked(row) {
    console.log(row);
  }

  onDetailClicked(row) {
    this.router.navigateByUrl(`${this.router.url}/${row._id}`);
  }
}
