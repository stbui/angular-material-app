import {Input, Output, Component, ElementRef} from '@angular/core';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class SidebarMenuComponent {

  _items: any;
  isOpen: boolean = false;

  @Input() title: any = 'title';

  @Input()
  set items(items) {
    this._items = items;
  }

  get items() {
    return this._items;
  }


  constructor() {
    console.log(this._items)
  }

  onToggleMenu($event) {
    $event.stopPropagation();
    $event.preventDefault();

    this.isOpen = !this.isOpen;
  }
}
