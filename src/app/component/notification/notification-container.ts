/**
 * @license
 * Copyright Stbui All Rights Reserved.
 */

import {
  Component,
  ComponentRef,
  EmbeddedViewRef,
  ViewChild,
  NgZone,
  OnDestroy,
  ElementRef,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  ChangeDetectorRef,
} from '@angular/core';
import {
  BasePortalOutlet,
  ComponentPortal,
  CdkPortalOutlet,
  TemplatePortal,
} from '@angular/cdk/portal';
import { NotificationConfig } from './notification.config';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';


@Component({
  moduleId: module.id,
  selector: 'notification-container',
  templateUrl: 'notification-container.html',
  styleUrls: ['notification-container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: {
    'role': 'alert',
    'class': 'notification-container',
  },
})
export class NotificationContainer extends BasePortalOutlet implements OnDestroy {
  @ViewChild(CdkPortalOutlet) _portalOutlet: CdkPortalOutlet;

  readonly _onExit: Subject<any> = new Subject();
  readonly _onEnter: Subject<any> = new Subject();

  notificationConfig: NotificationConfig;

  constructor(
    private _ngZone: NgZone,
    private _elementRef: ElementRef,
    private _changeDetectorRef: ChangeDetectorRef) {
    super();
  }

  attachComponentPortal<T>(portal: ComponentPortal<T>): ComponentRef<T> {
    return this._portalOutlet.attachComponentPortal(portal);
  }

  attachTemplatePortal<C>(portal: TemplatePortal<C>): EmbeddedViewRef<C> {
    return this._portalOutlet.attachTemplatePortal(portal);
  }

  ngOnDestroy() {

  }
}
