import { Injectable,Inject } from '@angular/core';
import { SidenavItem } from './item/item.model';
import { BehaviorSubject, Observable} from 'rxjs';

@Injectable()
export class SidenavService {

  private _itemsSubject: BehaviorSubject<SidenavItem[]> = new BehaviorSubject<SidenavItem[]>([]);
  private _items: SidenavItem[] = [];
  items$: Observable<SidenavItem[]> = this._itemsSubject.asObservable();

  constructor(@Inject('sidebar') private sidebarService) {
    let dashboard = this.addItem('Dashboard', 'dashboard', '/', 1);
    let components =  this.addItem('Components', 'layers', null, 3);
    this.addSubItem(components, 'Autocomplete', '/components/autocomplete', 1);
    this.addSubItem(components, 'Buttons', '/components/buttons', 2);

    let forms = this.addItem('Forms', 'insert_comment', null, 4);
    this.addSubItem(forms, 'Form Elements', '/forms/form-elements', 1);
    this.addSubItem(forms, 'Form Wizard', '/forms/form-wizard', 1);
  }

  addItem(name: string, icon: string, route: string, position: number, badge?: string, badgeColor?: string) {
    let item = new SidenavItem({
      name: name,
      icon: icon,
      route: route,
      subItems: [ ],
      position: position || 99,
      badge: badge || null,
      badgeColor: badgeColor || null
    });

    this._items.push(item);
    this._itemsSubject.next(this._items);

    return item;
  }

  addSubItem(parent: SidenavItem, name: string, route: string, position: number) {
    let item = new SidenavItem({
      name: name,
      route: route,
      parent: parent,
      subItems: [ ],
      position: position || 99
    });

    parent.subItems.push(item);
    this._itemsSubject.next(this._items);

    return item;
  }

  removeItem(){}

  isOpen() {}

  toggleCurrentlyOpen(item) {

  }
}
