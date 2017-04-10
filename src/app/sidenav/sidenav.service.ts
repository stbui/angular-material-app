import { Injectable } from '@angular/core';
import { SidenavItem } from './item/item.model';

@Injectable()
export class SidenavService {

  private _imtes: SidenavItem[] = [];
  items:SidenavItem[] = [];

  constructor() { }

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

  removeItem(){}

  isOpen() {}

  toogleCurrentlyOpen() {}
}
