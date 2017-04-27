import {Component, Input, Output, EventEmitter, ViewEncapsulation} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'stbui-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  host: {
    '[class.pagination-end]': '_isEnd',
    '[class.pagination-center]': '_isCenter',
  },
  encapsulation: ViewEncapsulation.None
})
export class PaginationComponent {

  @Output() onPage = new EventEmitter<void>();
  @Input() total: number;

  private _align: 'start' | 'center' | 'end' = 'start';
  @Input()
  get align() {
    return this._align;
  }

  set align(value) {
    value = (value == 'end') ? 'end' : (value == 'center') ? 'center' : 'start';
    if (value != this._align) {
      this._align = value;
    }
  }

  get _isEnd() {
    return this._align == 'end';
  }

  get _isCenter() {
    return this._align == 'center';
  }

  currentPage: number;
  totalPages: number;
  pages = [];

  constructor() {
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
