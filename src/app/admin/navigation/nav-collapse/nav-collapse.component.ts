import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NavigationService } from '../navigation.service';

@Component({
  selector: 'stbui-nav-collapse',
  templateUrl: './nav-collapse.component.html',
  styleUrls: ['./nav-collapse.component.scss']
})
export class NavCollapseComponent implements OnInit {

  @Input() item: any;
  @HostBinding('class') classes = 'navigation-collapse navigation-item';
  @HostBinding('class.open') public isOpen = false;

  constructor(private service: NavigationService, private router: Router) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
      }
    });
  }

  ngOnInit() {
  }

  toggleOpen(e) {
    e.preventDefault();
    this.isOpen = !this.isOpen;
    this.service.onNavigationCollapseToggled.emit(this.item);
    this.service.onNavigationCollapseToggle.emit();
  }

  expend() {
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

}
