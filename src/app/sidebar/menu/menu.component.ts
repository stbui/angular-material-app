import {Input, Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class SidebarMenuComponent {

  _items: any;
  isOpen: boolean = false;

  @Input()
  set items(items) {
    this._items = items;
  }

  get items() {
    return this._items;
  }

  constructor(private _router:Router) { }

  onToggleTriggered($event) {
    $event.preventDefault();
    $event.stopPropagation();

    if(!!this._items.items) {
      this.isOpen = !this.isOpen;
    } else {
      if(this._items.links) {
        this._router.navigate([this._items.links])
      }
    }
  }
}
