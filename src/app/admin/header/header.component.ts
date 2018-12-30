import { Component, Input } from '@angular/core';
import { NavigationStart, NavigationEnd, Router } from '@angular/router';
import * as screenfull from 'screenfull';

@Component({
  selector: 'stbui-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() customizer: any;
  @Input() sidenav: any;

  isFullscreen: boolean = false;
  showLoading: boolean;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.showLoading = true;
      } else if (event instanceof NavigationEnd) {
        this.showLoading = false;
      }
    });
  }

  toggleFullscreen() {
    if (screenfull.enabled) {
      screenfull.toggle();
      this.isFullscreen = !this.isFullscreen;
    }
  }
}
