import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { SidenavItem } from './item/item.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit, OnDestroy {

  items: SidenavItem[] = [];
  private _itemsSubscription: Subscription;
  private _routerEventsSubscription: Subscription;

  constructor(@Inject('sidenavService') private service,
              private router: Router) {
  }

  ngOnInit() {
    this._itemsSubscription = this.service.items$.subscribe((items: SidenavItem[]) => {
      this.items = this.sortRecursive(items, 'position');
    });

    this._routerEventsSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.service.nextCurrentlyOpenByRoute(event.url);
        setTimeout(() => {
          window.dispatchEvent(new Event('resize'));
        }, 400);
      }
    });
  }

  toggleIconSidenav() {
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 300);

    this.service.isIconSidenav = !this.service.isIconSidenav;

  }

  isIconSidenav(): boolean {
    return this.service.isIconSidenav;
  }

  sortRecursive(array: SidenavItem[], propertyName: string) {
    return array;
  };

  ngOnDestroy() {
    this._itemsSubscription.unsubscribe();
    this._routerEventsSubscription.unsubscribe();
  }
}
