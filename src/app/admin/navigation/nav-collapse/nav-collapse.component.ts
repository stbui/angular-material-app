import { Component, OnInit, Input, HostBinding, ViewEncapsulation } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NavigationService } from '../navigation.service';
import { NavigationAnimation } from '../navigation.animation';

@Component({
  selector: 'stbui-nav-collapse',
  templateUrl: './nav-collapse.component.html',
  styleUrls: ['./nav-collapse.component.scss'],
  animations: NavigationAnimation,
  encapsulation: ViewEncapsulation.None
})
export class NavCollapseComponent implements OnInit {

  @Input() item: any;
  @HostBinding('class') classes = 'navigation-collapse navigation-item';
  @HostBinding('class.open') public isOpen = false;

  constructor(private service: NavigationService, private router: Router) {
    router.events.subscribe(
      (event) => {

        if (event instanceof NavigationEnd) {
          if (this.isUrlInChildren(this.item, event.urlAfterRedirects)) {
            this.expand();
          } else {
            this.collapse();
          }
        }
      }
    );

    this.service.onNavigationCollapseToggled.subscribe(
      (clickedItem) => {
        if (clickedItem && clickedItem.children) {
          if (this.isChildrenOf(this.item, clickedItem)) {
            return;
          }

          if (this.isUrlInChildren(this.item, this.router.url)) {
            return;
          }

          if (this.item !== clickedItem) {
            this.collapse();
          }
        }
      }
    );
  }

  ngOnInit() {
    if (this.isUrlInChildren(this.item, this.router.url)) {
      this.expand();
    } else {
      this.collapse();
    }
  }

  toggleOpen(e) {
    e.preventDefault();

    this.isOpen = !this.isOpen;
    this.service.onNavigationCollapseToggled.emit(this.item);
    this.service.onNavigationCollapseToggle.emit();
  }

  expand() {
    if (this.isOpen) {
      return;
    }

    this.isOpen = true;
    this.service.onNavigationCollapseToggle.emit();
  }

  collapse() {
    if (!this.isOpen) {
      return;
    }
    this.isOpen = false;
    this.service.onNavigationCollapseToggle.emit();
  }

  isChildrenOf(parent, item) {
    if (!parent.children) {
      return false;
    }

    if (parent.children.indexOf(item) !== -1) {
      return true;
    }

    for (const children of parent.children) {
      if (children.children) {
        return this.isChildrenOf(children, item);
      }
    }
  }

  isUrlInChildren(parent, url) {
    if (!parent.children) {
      return false;
    }

    for (let i = 0; i < parent.children.length; i++) {
      if (parent.children[i].children) {
        if (this.isUrlInChildren(parent.children[i], url)) {
          return true;
        }
      }

      if (parent.children[i].url === url || url.includes(parent.children[i].url)) {
        return true;
      }
    }

    return false;
  }
}
