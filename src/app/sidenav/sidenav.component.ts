import { Component, OnInit, Inject } from '@angular/core';
import { SidenavItem } from './item/item.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  items:SidenavItem[] = [];
  private _itemsSubscription :Subscription;
  constructor(@Inject('sidebar') private sidebarService,
  @Inject('sidenavService') private service) { }

  ngOnInit() {
    this._itemsSubscription = this.service.items$.subscribe((items:SidenavItem[])=>{
      this.items = items;
    });

    // let menus  = this.sidebarService.getMenus();
    // menus.forEach((value, index) => {
    //   let parentItem = this.service.addItem(value.name,value.icon,value.links);
    // });
    //
    // let demo = this.service.addItem('demo','icon','route');
    // this.service.addSubItem(demo,'demosub','/');
    //
    // this.service.addItem('demo1','icon','route');
    //
    // let demo2 = this.service.addItem('demo2','icon','route');
    // this.service.addSubItem(demo2,'sub','/');
    // this.service.addSubItem(demo2,'sub','/');
    // this.service.addSubItem(demo2,'sub','/');

  }

  addItem(name: string, icon:string,route:string,badge?:string,badgeColor?:string) {
    let item = new SidenavItem({
      name:name,
      icon:icon,
      route:route,
      subItems:[],
      position:99,
      badge:badge || null,
      badgeColor: badgeColor || null
    });

    this.items.push(item);
    return item;
  }

  addSubItem(parent:SidenavItem, name:string,route:string){
    let item = new SidenavItem({
      name:name,
      route:route,
      parent:parent,
      subItems:[],
      position:99
    });

    parent.subItems.push(item);
    return item;
  }

  toggleIconSidenav(){}

  isIconSidenav() {}
}
