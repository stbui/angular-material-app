import { Component, OnInit, Input,Inject, HostBinding, ViewEncapsulation } from '@angular/core';
import { SidenavItem } from './item.model';

@Component({
  selector: 'sidenav-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ItemComponent implements OnInit {

  @Input() item: SidenavItem;
  isCollapse:boolean = false;

  @HostBinding('class.open')
  get isOpen() {
    return this.isCollapse;
  }

  constructor(@Inject('sidenavService') private sidenavService) {
  }

  ngOnInit() {
  }

  toggleDropdown() {
    this.isCollapse = !this.isCollapse;
    if(this.item.hasSubItems()) {
      this.sidenavService.toggleCurrentlyOpen(this.item);
    }
  }

  getSubItemsHeight() {
    if (this.item.hasSubItems()) {
      return (this.getOpenSubItemCount(this.item) * 48) + 'px';
    }
  }

  getOpenSubItemCount(item: SidenavItem): number {
    let count = 0;
    if (item.hasSubItems() && this.isCollapse) {
      count += item.subItems.length;
    }
    return count;
  }
}
