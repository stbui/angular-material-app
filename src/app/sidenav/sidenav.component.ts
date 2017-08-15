import { Component, OnInit, Inject, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { SidenavItem } from './item/item.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @Input() theme = {
    header: 'stbui-white',
    aside: 'stbui-default',
    logo: 'stbui-primary'
  };

  items: SidenavItem[] = [];
  private _itemsSubscription: Subscription;

  constructor(@Inject('sidenavService') private service,
              private router: Router) {
  }

  ngOnInit() {
    this._itemsSubscription = this.service.items$.subscribe((items: SidenavItem[]) => {
      this.items = items;
    });

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        console.log(event.url);
      }
    });

  }


  toggleIconSidenav() {
  }

  isIconSidenav() {
  }
}
