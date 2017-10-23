import { Injectable } from '@angular/core';
import { SidenavItem } from './item/item.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class SidenavService {

  private _itemsSubject: BehaviorSubject<SidenavItem[]> = new BehaviorSubject<SidenavItem[]>([]);
  private _items: SidenavItem[] = [];
  items$: Observable<SidenavItem[]> = this._itemsSubject.asObservable();

  private _currentlyOpenSubject: BehaviorSubject<SidenavItem[]> = new BehaviorSubject<SidenavItem[]>([]);
  private _currentlyOpen: SidenavItem[] = [];
  currentlyOpen$: Observable<SidenavItem[]> = this._currentlyOpenSubject.asObservable();

  constructor() {
    const dashboard = this.addItem('主页', 'home', '/home', 1);
    const materials = this.addItem('UI元素', 'bubble_chart', null, 3);
    this.addSubItem(materials, '分页', '/materials/pagination', 3);
    this.addSubItem(materials, '日期选择器', '/materials/datepicker', 3);
    this.addSubItem(materials, '弹出框', '/materials/popover', 3);
    this.addSubItem(materials, '按钮', '/materials/buttons', 1);
    this.addSubItem(materials, '卡片', '/materials/cards', 2);
    this.addSubItem(materials, '列表', '/materials/lists', 3);
    this.addSubItem(materials, '菜单', '/materials/menu', 3);
    this.addSubItem(materials, '滑块', '/materials/slider', 3);
    this.addSubItem(materials, '标签页', '/materials/tabs', 3);
    this.addSubItem(materials, '文字提示', '/materials/tooltips', 3);
    this.addSubItem(materials, '对话框', '/materials/dialogs', 3);
    this.addSubItem(materials, 'Toast', '/materials/toast', 3);
    this.addSubItem(materials, 'Snack-Bar', '/materials/snackbar', 3);

    const components = this.addItem('拓展组件', 'equalizer', null, 3, '1', '#4CAF50');
    this.addSubItem(components, '高德地图', '/materials/amap', 1);
    this.addSubItem(components, 'Markdown', '/materials/markdown', 1);
    this.addSubItem(components, '图表', '/components/chart', 1);
    this.addSubItem(components, '通知', '/materials/popover', 1);
    this.addSubItem(components, '日历', '/materials/calendar', 1);
    this.addSubItem(components, '文件上传', '/materials/popover', 1);

    const forms = this.addItem('表单', 'format_color_text', null, 4);
    this.addSubItem(forms, '表单元素', '/forms/elements', 1);
    this.addSubItem(forms, '表单验证', '/forms/validation', 1);
    this.addSubItem(forms, '编辑器', '/forms/editor', 1);

    const tables = this.addItem('表格', 'list', null, 5);
    this.addSubItem(tables, '基本表格', '/tables/static', 1);
    this.addSubItem(tables, '数据表格', '/tables/datatable', 2);

    const pages = this.addItem('页面', 'content_copy', null, 7);
    // this.addSubItem(pages, '关于', '/pages/about', 1);
    // this.addSubItem(pages, '服务', '/pages/services', 1);
    // this.addSubItem(pages, '联系', '/pages/contact', 1);
    // this.addSubItem(pages, '团队', '/pages/terms', 1);
    this.addSubItem(pages, '文件管理', '/pages/file-manager', 1);
    this.addSubItem(pages, '团队管理', '/', 1);
    this.addSubItem(pages, '项目管理', '/pages/projects', 1);
    this.addSubItem(pages, '联系人', '/', 1);
    this.addSubItem(pages, '个人资料', '/pages/profile', 1);
    this.addSubItem(pages, '博客', '/pages/blog', 1);
    // this.addSubItem(pages, '收藏神器', '/pages/collection', 1);
    this.addSubItem(pages, '用户管理', '/pages/user', 1);

    const extraPages = this.addItem('扩展页面', 'more_horiz', null, 8);
    this.addSubItem(extraPages, '登录', '/sigin', 1);
    this.addSubItem(extraPages, '注册', '/sigup', 1);
    this.addSubItem(extraPages, '404', '/sigup', 1);
    this.addSubItem(extraPages, '500', '/sigup', 1);

    const apps = this.addItem('应用', 'apps', null, 8);
    this.addSubItem(apps, '任务', '/apps/todo/ALL', 1);
    this.addSubItem(apps, '聊天', '/apps/chats', 1);
    this.addSubItem(apps, '信箱', '/apps/mail', 1);
    this.addSubItem(apps, '码农庄园', '/apps/navigation', 1);

    const analysis = this.addItem('数据分析', 'poll', null, 8);
    this.addSubItem(analysis, '人群分布', '/analysis/crowd', 1);
    this.addSubItem(analysis, '行为偏好', '/analysis/preference', 1);
    this.addSubItem(analysis, '人口分布', '/analysis/population', 1);
    this.addSubItem(analysis, '设备分布', '/analysis/equipment', 1);
    this.addSubItem(analysis, '场景画像', '/analysis/scePortrait', 1);

    const crm = this.addItem('客户关系', 'business', null, 8);
    this.addSubItem(crm, '线索', '/crm/lead', 1);
    this.addSubItem(crm, '客户', '/crm/lead', 1);
    this.addSubItem(crm, '公海', '/crm/lead', 1);
    this.addSubItem(crm, '联系人', '/crm/lead', 1);
    this.addSubItem(crm, '商机', '/crm/lead', 1);
    this.addSubItem(crm, '产品', '/crm/lead', 1);

    const apm = this.addItem('前端监控', 'code', null, 9, 'new', '#3F51B5');
    this.addSubItem(apm, '脚本异常', '/apm/error', 1);
    this.addSubItem(apm, '性能分析', '/apm/performance', 1);

  }

  addItem(name: string, icon: string, route: any, position: number, badge?: string, badgeColor?: string, customClass?: string) {
    const item = new SidenavItem({
      name: name,
      icon: icon,
      route: route,
      subItems: [],
      position: position || 99,
      badge: badge || null,
      badgeColor: badgeColor || null,
      customClass: customClass || null
    });

    this._items.push(item);
    this._itemsSubject.next(this._items);

    return item;
  }

  addSubItem(parent: SidenavItem, name: string, route: any, position: number) {
    const item = new SidenavItem({
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

  removeItem(item: SidenavItem) {
    const index = this._items.indexOf(item);
    if (index > -1) {
      this._items.splice(index, 1);
    }

    this._itemsSubject.next(this._items);
  }

  isOpen(item: SidenavItem) {
    return (this._currentlyOpen.indexOf(item) !== -1);
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

  nextCurrentlyOpen(currentlyOpen: SidenavItem[]) {
    this._currentlyOpen = currentlyOpen;
    this._currentlyOpenSubject.next(currentlyOpen);
  }

  nextCurrentlyOpenByRoute(route: string) {
    const currentlyOpen = [];

    const item = this.findByRouteRecursive(route, this._items);

    // if (item && item.hasParent()) {
    //   currentlyOpen = this.getAllParents(item);
    // } else if (item) {
    //   currentlyOpen = [item];
    // }
    //
    // this.nextCurrentlyOpen(currentlyOpen);
  }

  findByRouteRecursive(route: string, collection: SidenavItem[]) {
    let result = collection.filter((item) => {
      if (item.route === route) {
        return item;
      }
    });


    if (!result) {
      collection.forEach((item) => {
        if (item.hasSubItems()) {
          const found = this.findByRouteRecursive(route, item.subItems);

          if (found) {
            result = found;
            return false;
          }
        }
      });
    }

    return result;
  }

  get currentlyOpen() {
    return this._currentlyOpen;
  }

  getSidenavItemByRoute(route) {
    return this.findByRouteRecursive(route, this._items);
  }

}
