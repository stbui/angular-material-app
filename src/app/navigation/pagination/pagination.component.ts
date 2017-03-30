import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'stbui-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Output() onPage = new EventEmitter();
  @Input() total;

  currentPage;
  totalPages;
  pages = [];

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.totalPages = this.total;
    this.currentPage = 1;
    this.setPage();
  }

  setPage() {
    let start = 0;
    let end = 0;

    if (this.currentPage - 5 <= 0) {
      start = 0;
      end = start + 10;
    } else if (this.currentPage + 5 > this.totalPages) {
      end = this.totalPages;
      start = end - 10;
    } else {
      start = this.currentPage - 6;
      end = this.currentPage + 5;
    }

    let pages = [];
    for (var i = 1; i <= this.totalPages; i++) {
      pages.push(i);
    }

    this.pages = pages.slice(start, end);
  }

  onPageTriggered(page) {
    if (this.currentPage == page) {
      return false;
    }

    this.onPage.emit(page);
    this.currentPage = page;
    this.setPage();
  }
}
