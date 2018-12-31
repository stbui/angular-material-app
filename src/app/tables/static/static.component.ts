import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-static',
  templateUrl: './static.component.html',
  styleUrls: ['./static.component.scss'],
  animations: [
    trigger('detailExpand', [
      state(
        'collapsed',
        style({ height: '0px', minHeight: '0', display: 'none' })
      ),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      )
    ])
  ]
})
export class StaticComponent implements OnInit {
  displayedColumns: string[] = [
    'appName',
    'cateNames',
    'developCompanyFullName',
    'activeNums',
    'activeNumsRatio'
  ];
  columns: string[] = [
    'appName',
    'cateNames',
    'developCompanyFullName',
    'activeNums',
    'activeNumsRatio',
    'star',
  ];
  dataSource: any;
  columnsToDisplay: string[] = this.displayedColumns.slice();

  private apiUrl = environment.tableApi;

  constructor(private _http: HttpClient) {}

  ngOnInit() {
    this.getQuery();
  }

  getQuery() {
    const url = `${this.apiUrl}/static.json`;
    this._http
      .get(url)
      .toPromise()
      .then(res => {
        this.dataSource = res;
      });
  }

  addColumn() {
    const randomColumn = Math.floor(
      Math.random() * this.displayedColumns.length
    );
    this.columnsToDisplay.push(this.displayedColumns[randomColumn]);
  }

  removeColumn() {
    if (this.columnsToDisplay.length) {
      this.columnsToDisplay.pop();
    }
  }

  shuffle() {
    let currentIndex = this.columnsToDisplay.length;
    while (0 !== currentIndex) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      let temp = this.columnsToDisplay[currentIndex];
      this.columnsToDisplay[currentIndex] = this.columnsToDisplay[randomIndex];
      this.columnsToDisplay[randomIndex] = temp;
    }
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
