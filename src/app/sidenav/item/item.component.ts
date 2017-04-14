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

  @HostBinding('class.open')
  get isOpen() {
    return this.sidenavService.isOpen(this.item);
  }

  constructor(@Inject('sidenavService') private sidenavService) {
  }

  ngOnInit() {
  }

  toggleDropdown() {
    if(this.item.hasSubItems()) {
      this.sidenavService.toggleCurrentlyOpen(this.item);
    }
  }

  /*
  *  获取子菜单高度
  * */
  getSubItemsHeight() {
    if (this.item.hasSubItems()) {
      return (this.getOpenSubItemsCount(this.item) * 56) + 'px';
    }
  }

  /*
  * 计算子菜单高度
  * */
  getOpenSubItemsCount(item: SidenavItem): number {
    let count = 0;
    if (item.hasSubItems() && this.sidenavService.isOpen(item)) {
      count += item.subItems.length;
      item.subItems.forEach((subItem) => {
        count += this.getOpenSubItemsCount(subItem);
      })
    }
    return count;
  }
}
