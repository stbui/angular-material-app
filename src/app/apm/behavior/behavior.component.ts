import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { merge, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { SearchComponent } from '../../component';
import { BehaviorService } from './behavior.service';

@Component({
  selector: 'apm-behavior',
  templateUrl: './behavior.component.html',
  styleUrls: ['./behavior.component.scss']
})
export class BehaviorComponent implements OnInit {
  displayedColumns: string[] = ['ip', 'browser', 'system', 'star'];

  dataSource = new MatTableDataSource([]);
  selection = new SelectionModel(true, []);

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  devicesDataSource = [];
  eventDataSource = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(SearchComponent) search: SearchComponent;

  constructor(private service: BehaviorService, private router: Router) {}

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
  }

  onDetailClicked(row) {
    this.router.navigateByUrl(`${this.router.url}/${row.markuser}`);
  }
}
