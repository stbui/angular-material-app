/**
 * @license
 * Copyright Stbui All Rights Reserved.
 * https://github.com/stbui
 */

import {
  Component,
  OnInit,
  Input,
  ContentChild,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'stbui-layout-header',
  template: '<ng-content></ng-content>',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'stbui-layout-header'
  }
})
export class LayoutHeaderComponent implements OnInit {
  @Input() color: 'primary' | 'accent' | 'warn' = 'primary';

  constructor() {}

  ngOnInit() {}
}

@Component({
  selector: 'stbui-layout-sidenav',
  template: '<ng-content></ng-content>',
  host: {
    class: 'stbui-layout-sidenav'
  }
})
export class LayoutSidenavComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

@Component({
  selector: 'stbui-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  @ContentChild(LayoutHeaderComponent) _headerComponent: LayoutHeaderComponent;
  constructor() {}

  ngOnInit() {}
}
