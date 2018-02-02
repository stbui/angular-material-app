import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'stbui-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  host: {
    '[class.pagination-end]': '_isEnd',
    '[class.pagination-center]': '_isCenter'
  },
  encapsulation: ViewEncapsulation.None
})
export class PaginationComponent {
  // @Input() total: number = 10;
  @Input()
  set total(value) {
    this.totalPages = value;
    this.setPage();
    this._total = value;
  }
  get total() {
    return this._total;
  }

  @Output() onPage: EventEmitter<any> = new EventEmitter<any>();

  private _align: 'start' | 'center' | 'end' = 'start';
  @Input()
  get align() {
    return this._align;
  }

  set align(value) {
    value = value == 'end' ? 'end' : value == 'center' ? 'center' : 'start';
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

  private _total: number = 10;

  currentPage: number = 1;
  totalPages: number;
  pages: number[] = [];

  constructor() {}

  setPage() {
    let start: number = 0;
    let end: number = 0;

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

  onPageTriggered(page: number) {
    if (this.currentPage == page) {
      return false;
    }

    this.currentPage = page;

    if (page > 5) {
      this.setPage();
    }
    this.onPage.emit(page);
  }
}
