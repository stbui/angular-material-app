import { Component, OnInit, Inject } from '@angular/core';
import { SidenavItem } from './item/item.model';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  items:SidenavItem[] = [];
  constructor(@Inject('sidebar') private service) { }

  ngOnInit() {

    let menus  = this.service.getMenus();
    menus.forEach((value, index) => {
      let parentItem = this.addItem(value.name,value.icon,value.links);
    });

    let demo = this.addItem('demo','icon','route');
    this.addSubItem(demo,'demosub','/');

    this.addItem('demo1','icon','route');

    let demo2 = this.addItem('demo2','icon','route');
    this.addSubItem(demo2,'sub','/');
    this.addSubItem(demo2,'sub','/');
    this.addSubItem(demo2,'sub','/');

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
