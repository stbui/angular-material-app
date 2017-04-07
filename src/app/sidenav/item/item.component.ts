import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { SidenavItem } from './item.model';

@Component({
  selector: 'sidenav-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() item: SidenavItem;
  isOpen: boolean = false;

  // @HostBinding('class.open');

  constructor() {
  }

  ngOnInit() {
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  getSubItemsHeight() {
    if (this.item.hasSubItems()) {
      return (this.getOpenSubItemCount(this.item) * 48) + 'px';
    }
  }

  getOpenSubItemCount(item: SidenavItem): number {
    let count = 0;
    if (item.hasSubItems() && this.isOpen) {
      count += item.subItems.length;
    }
    return count;
  }
}
