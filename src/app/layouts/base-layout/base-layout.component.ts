/**
 * @license
 * Copyright Stbui All Rights Reserved.
 */

import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  ContentChild
} from '@angular/core';

@Component({
  selector: 'stbui-base-layout-header',
  template: '<ng-content></ng-content>',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'base-layout-header'
  }
})
export class BaseLayoutHeaderComponent implements OnInit {
  @Input() color: 'primary' | 'accent' | 'warn' = 'primary';
  constructor() {}

  ngOnInit() {}
}

@Component({
  selector: 'stbui-base-layout-toolbar',
  template: '<ng-content></ng-content>',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'base-layout-toolbar'
  }
})
export class BaseLayoutToolbarComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

@Component({
  selector: 'stbui-base-layout-content',
  template: '<ng-content></ng-content>',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'base-layout-content'
  }
})
export class BaseLayoutContentComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

@Component({
  selector: 'stbui-base-layout, stbui-base-layout-container',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'layout-container',
    '[class.layout-strategy]': 'scrollStrategy === "strategy"'
  }
})
export class BaseLayoutComponent implements OnInit {
  @Input() scrollStrategy;
  @ContentChild(BaseLayoutHeaderComponent) _header: BaseLayoutHeaderComponent;
  constructor() {}

  ngOnInit() {}
}
