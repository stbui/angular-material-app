import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  currentPage;

  constructor() { }

  ngOnInit() {
  }

  page(current) {
    this.currentPage=current;
  }

}
