import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { CollectionService } from './collection.service';

@Component({
  selector: 'apm-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'releaseStage',
    'type',
    'method',
    'domain',
    'url'
  ];
  dataSource: any = new MatTableDataSource([]);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private service: CollectionService) {}

  ngOnInit() {
    this.service.getList().subscribe(res => {
      this.dataSource = new MatTableDataSource(res.data);
      this.dataSource.paginator = this.paginator;
    });
  }

  onSearchTriggered(value) {
    console.log(value);
  }
}
