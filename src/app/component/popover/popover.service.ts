/**
 * @license
 * Copyright Stbui All Rights Reserved.
 * https://github.com/stbui
 */

import { Injectable, ViewContainerRef, ElementRef } from '@angular/core';
import { TemplatePortal } from '@angular/cdk/portal';
import {
  Overlay,
  OverlayRef,
  OverlayConfig,
  HorizontalConnectionPos,
  VerticalConnectionPos
} from '@angular/cdk/overlay';
import { ESCAPE } from '@angular/cdk/keycodes';
import { filter } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { PopoverComponent } from './popover.component';
import { PopoverRef } from './popover.ref';

@Injectable({
  providedIn: 'root'
})
export class PopoverService {
  private readonly _afterOpened = new Subject<void>();
  private readonly _afterClosed = new Subject<void>();

  private _popover: PopoverComponent;
  private _elementRef: ElementRef;
  private _overlayRef: OverlayRef | null = null;
  private _openedRef;

  constructor(
    private _overlay: Overlay,
    private _viewContainerRef: ViewContainerRef
  ) {}

  open() {
    this._overlayRef = this._createOverlay();
    const container = this._attachContainer(this._overlayRef);
    const popoverRef = new PopoverRef(container, this._overlayRef);

    popoverRef.instance = container.instance;

    this._overlayRef.backdropClick().subscribe(() => this.dismiss());
    this._overlayRef
      .keydownEvents()
      .pipe(filter(event => event.keyCode === ESCAPE))
      .subscribe(() => this.dismiss());

    this._openedRef = popoverRef;

    return popoverRef;
  }

  close() {
    if (this._openedRef) {
      this._openedRef.dismissWithAction();
      this._overlayRef.detach();
    }
  }

  dismiss() {
    if (this._openedRef) {
      this._openedRef.dismissWithAction();
      this._overlayRef.dispose();
    }
  }

  anchor(
    popover: PopoverComponent,
    viewContainerRef: ViewContainerRef,
    elementRef: ElementRef
  ) {
    this._popover = popover;
    this._viewContainerRef = viewContainerRef;
    this._elementRef = elementRef;

    this._afterOpened.asObservable().subscribe(() => {
      this.open();
    });
  }

  afterOpened() {
    this._afterOpened.next();
    this._afterOpened.complete();
  }

  private _attachContainer(overlayRef) {
    const containerPortal = new TemplatePortal(
      this._popover.templateRef,
      this._viewContainerRef
    );

    const containerRef = overlayRef.attach(containerPortal);

    return containerRef;
  }

  private _createOverlay(config?): OverlayRef {
    const overlayConfig = new OverlayConfig({
      positionStrategy: this._getPosition(),
      backdropClass: 'cdk-overlay-transparent-backdrop',
      hasBackdrop: true
    });

    return this._overlay.create(overlayConfig);
  }

  private _getPosition() {
    let [originX, originFallbackX]: HorizontalConnectionPos[] = [
      'start',
      'end'
    ];
    let [overlayY, overlayFallbackY]: VerticalConnectionPos[] = [
      'top',
      'bottom'
    ];

    let [originY, originFallbackY] = [overlayY, overlayFallbackY];
    let [overlayX, overlayFallbackX] = [originX, originFallbackX];
    let offsetY = 8;

    const strategy = this._overlay
      .position()
      .flexibleConnectedTo(this._elementRef)
      .withPositions([
        {
          originX: 'start',
          originY: 'bottom',
          overlayX: 'start',
          overlayY: 'top'
        },
        {
          originX: 'start',
          originY: 'top',
          overlayX: 'start',
          overlayY: 'bottom'
        }
      ]);

    return strategy;
  }
}
