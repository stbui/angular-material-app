import { Injectable,Inject } from '@angular/core';
import { SidenavItem } from './item/item.model';
import { BehaviorSubject, Observable} from 'rxjs';

@Injectable()
export class SidenavService {

  private _itemsSubject: BehaviorSubject<SidenavItem[]> = new BehaviorSubject<SidenavItem[]>([]);
  private _items: SidenavItem[] = [];
  items$: Observable<SidenavItem[]> = this._itemsSubject.asObservable();

  private _currentlyOpenSubject: BehaviorSubject<SidenavItem[]> = new BehaviorSubject<SidenavItem[]>([]);
  private _currentlyOpen: SidenavItem[] = [];
  currentlyOpen$: Observable<SidenavItem[]> = this._currentlyOpenSubject.asObservable();

  constructor() {
    let dashboard = this.addItem('Dashboard', 'home', '/', 1);
    let materials = this.addItem('UI Kit', 'bubble_chart', null, 3);
    this.addSubItem(materials, 'Buttons', '/materials/buttons', 1);
    this.addSubItem(materials, 'Cards', '/materials/cards', 2);
    this.addSubItem(materials, 'Lists', '/materials/lists', 3);
    this.addSubItem(materials, 'Menu', '/materials/menu', 3);
    this.addSubItem(materials, 'Slider', '/materials/slider', 3);
    this.addSubItem(materials, 'Snack-Bar', '/materials/snackbar', 3);
    this.addSubItem(materials, 'Toast', '/materials/toast', 3);
    this.addSubItem(materials, 'Tooltips', '/materials/tooltips', 3);
    this.addSubItem(materials, 'Dialogs', '/materials/dialogs', 3);
    this.addSubItem(materials, 'Tabs', '/materials/tabs', 3);
    this.addSubItem(materials, 'Pagination', '/materials/pagination', 3);
    this.addSubItem(materials, 'Date Picker', '/materials/datepicker', 3);

    let components = this.addItem('Components', 'equalizer', null, 3);
    this.addSubItem(components, '高德地图', '/materials/amap', 1);
    this.addSubItem(components, 'Markdown', '/materials/markdown', 1);
    this.addSubItem(components, 'Charts', '/components/chart', 1);

    let forms = this.addItem('Forms', 'format_color_text', null, 4);
    this.addSubItem(forms, 'Form Elements', '/forms/elements', 1);
    this.addSubItem(forms, 'Form validation', '/forms/validation', 1);
    this.addSubItem(forms, 'Editor', '/forms/editor', 1);

    let tables = this.addItem('Tables', 'list', null, 5);
    this.addSubItem(tables, 'Static Tables', '/tables/static', 1);
    this.addSubItem(tables, 'Datatable', '/tables/datatable', 2);

    let pages = this.addItem('Pages', 'content_copy', null, 7);
    this.addSubItem(pages, '关于', '/pages/about', 1);
    this.addSubItem(pages, '服务', '/pages/services', 1);
    this.addSubItem(pages, '联系', '/pages/contact', 1);
    this.addSubItem(pages, '团队', '/pages/terms', 1);
    this.addSubItem(pages, '反馈', '/pages/faqs', 1);
    this.addSubItem(pages, 'careers', '/pages/careers', 1);
    this.addSubItem(pages, 'profile', '/pages/profile', 1);
    this.addSubItem(pages, 'blog', '/pages/blog', 1);
    this.addSubItem(pages, '收藏神器', '/pages/collection', 1);
    this.addSubItem(pages, '用户管理', '/pages/user', 1);

    let extraPages = this.addItem('Extra Pages', 'more_horiz', null, 8);
    this.addSubItem(extraPages, '登录', '/sigin', 1);
    this.addSubItem(extraPages, '注册', '/sigup', 1);

    let apps = this.addItem('Apps', 'apps', null, 8);
    this.addSubItem(apps, 'Task', '/apps/todo/ALL', 1);
    this.addSubItem(apps, 'Chat', '/apps/chats', 1);
    this.addSubItem(apps, 'Mail', '/apps/mail', 1);
    this.addSubItem(apps, '码农庄园', '/apps/navigation', 1);
  }

  addItem(name: string, icon: string, route: string, position: number, badge?: string, badgeColor?: string) {
    let item = new SidenavItem({
      name: name,
      icon: icon,
      route: route,
      subItems: [],
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
      subItems: [],
      position: position || 99
    });

    parent.subItems.push(item);
    this._itemsSubject.next(this._items);

    return item;
  }

  isOpen(item: SidenavItem) {
    return (this._currentlyOpen.indexOf(item) != -1);
  }

  toggleCurrentlyOpen(item: SidenavItem) {
    let currentlyOpen = this._currentlyOpen;
    if (this.isOpen(item)) {
      if (currentlyOpen.length > 1) {
        currentlyOpen.length = this._currentlyOpen.indexOf(item);
      } else {
        currentlyOpen = [];
      }
    } else {
      currentlyOpen = this.getAllParents(item);
    }

    this._currentlyOpen = currentlyOpen;
    this._currentlyOpenSubject.next(currentlyOpen);
  }

  getAllParents(item: SidenavItem, currentlyOpen: SidenavItem[] = []) {
    currentlyOpen.unshift(item);

    if (item.hasParent()) {
      return this.getAllParents(item.parent, currentlyOpen);
    } else {
      return currentlyOpen;
    }
  }
}
