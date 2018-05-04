/**
 * @license
 * Copyright Stbui All Rights Reserved.
 */

import {
  Directive,
  Input,
  ElementRef,
  AfterViewInit,
  OnDestroy
} from '@angular/core';
import { ViewContainerRef, TemplateRef } from '@angular/core';
import { ComponentPortal, TemplatePortal } from '@angular/cdk/portal';
import {
  Overlay,
  OverlayConfig,
  OverlayRef,
  ConnectedPositionStrategy,
  HorizontalConnectionPos,
  VerticalConnectionPos
} from '@angular/cdk/overlay';
import { PopoverComponent } from './popover.component';

@Directive({
  selector: '[stbuiPopover],[popoverTriggerFor]',
  host: {
    '(click)': 'togglePopover()'
  },
  exportAs: 'popoverDirective'
})
export class PopoverDirective implements AfterViewInit, OnDestroy {
  @Input('popoverTriggerFor') popover;
  @Input() popoverTitle: string;
  @Input() popoverMessage: string;
  @Input() confirmText: string;
  @Input() cancelText: string;
  @Input() placement: string;
  @Input() isOpen: boolean = false;
  @Input() template;

  _overlayRef: OverlayRef;
  private portal;
  private _popoverOpen = false;

  constructor(
    private _elementRef: ElementRef,
    private viewContainerRef: ViewContainerRef,
    private overlay: Overlay
  ) {}

  ngAfterViewInit() {
    this._checkPopover();
  }

  ngOnDestroy() {
    this.destoryPopover();
  }

  openPopover() {
    if (!this._popoverOpen) {
      const overlayRef = this._createOverlay();
      overlayRef.attach(this.portal);
      this._popoverOpen = true;
    }
  }

  closePopover() {
    if (this._overlayRef) {
      this._overlayRef.detach();
      this._popoverOpen = false;
    }
  }

  destoryPopover() {
    this._destoryPopover();
  }

  togglePopover() {
    this._popoverOpen ? this.closePopover() : this.openPopover();
  }

  private _destoryPopover() {
    if (this._overlayRef) {
      this._overlayRef.dispose();
      this._overlayRef = null;
    }
  }

  private _createOverlay() {
    if (!this._overlayRef) {
      this.portal = new TemplatePortal(
        this.popover.templateRef,
        this.viewContainerRef
      );

      const confg = this._getOverlayConfig();
      this._overlayRef = this.overlay.create(confg);
    }

    return this._overlayRef;
  }

  private _getOverlayConfig(): OverlayConfig {
    return new OverlayConfig({
      positionStrategy: this._getPosition(),
      backdropClass: 'cdk-overlay-transparent-backdrop',
    });
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

    const strategy = this.overlay
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

  private _checkPopover() {
    if (!this.popover) {
      throw new Error(`
      Example:
        <stbui-popover #popover="stbPopover"></stbui-popover>
        <button [popoverTriggerFor]="popover"></button>
      `);
    }
  }
}
