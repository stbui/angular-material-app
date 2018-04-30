import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'stbui-tag-select',
  templateUrl: './tag-select.component.html',
  styleUrls: ['./tag-select.component.scss']
})
export class TagSelectComponent implements OnInit {
  @Input() label: string = '热门标签：';
  @Input() selectedIndex: number | null;
  @Input() tags: any = [];

  @Output() readonly selectedTagChange = new EventEmitter<any>();
  @Output() readonly selectedTagIndex = new EventEmitter<any>();

  isExpand: boolean = true;

  constructor() {}

  ngOnInit() {}

  onTagTriggered(tag) {
    this.selectedIndex = tag;
    this.selectedTagChange.emit(tag);
  }

  onMoreTriggered() {
    this.isExpand = !this.isExpand;
  }
}
