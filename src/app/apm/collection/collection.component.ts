import { Component, OnInit, ViewChild } from '@angular/core';
import { DatePipe } from '@angular/common';
import {
  MatPaginator,
  MatTableDataSource,
  MatSidenav
} from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { merge, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { SearchComponent } from '../../component';
import { CollectionService } from './collection.service';

@Component({
  selector: 'apm-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {
  displayedColumns: string[] = [
    'url',
    'method',
    'duration',
    'decoded_body_size',
    'options',
    'call_url',
    'create_time'
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

  body_size = 0;
  count = 0;
  duration = '0';

  // chart
  dataChart: any = [];

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

  constructor(private service: CollectionService, private datePipe: DatePipe) {}

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
          this.resultsLength = 40;
          return data.data.datalist;
        }),
        catchError(() => {
          this.isLoadingResults = false;
          this.isRateLimitReached = true;
          return observableOf([]);
        })
      )
      .subscribe(data => {
        this.dataSource = data;

        data.map(d => {
          this.dataChart.push({
            name: this.datePipe.transform(d.create_time,'yyyy-MM-dd hh:mm:ss'),
            value: d.duration
          });
        });
      });

    this.service.getCount().subscribe(res => {
      this.body_size = res.data.body_size;
      this.count = res.data.count;
      this.duration = parseFloat(res.data.duration).toFixed(2);
    });
  }

  onRowClicked(row) {
    this.sidenav.open();

    this.eventDataSource = [
      {
        name: 'AJAX地址',
        value: row.call_url
      },
      {
        name: '请求耗时',
        value: row.duration
      },
      {
        name: '请求方式',
        value: row.method
      },
      {
        name: '请求参数',
        value: row.options
      },
      {
        name: '速度类型',
        value: row.speed_type
      },
      {
        name: 'body大小',
        value: row.decoded_body_size
      },
      {
        name: '所属URL',
        value: row.url
      },
      {
        name: '完整URL',
        value: row.full_url
      },
      {
        name: '生成时间',
        value: this.datePipe.transform(row.create_time, 'yyyy-MM-dd hh:mm:ss')
      }
    ];

    this.devicesDataSource = [
      {
        name: 'IP地址',
        value: ''
      },
      {
        name: '来源城市',
        value: ''
      },
      {
        name: '浏览器',
        value: ''
      },
      {
        name: '操作系统',
        value: ''
      },
      {
        name: 'language',
        value: ''
      },
      {
        name: 'userAgent',
        value: ''
      }
    ];
  }

  onSearchTriggered(event) {}
}
