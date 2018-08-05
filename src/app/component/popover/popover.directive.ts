/**
 * @license
 * Copyright Stbui All Rights Reserved.
 * https://github.com/stbui
 */

import {
  Directive,
  Input,
  ElementRef,
  AfterViewInit,
  OnDestroy,
  ViewContainerRef
} from '@angular/core';
import { TemplatePortal } from '@angular/cdk/portal';
import { PopoverService } from './popover.service';
import { PopoverComponent } from './popover.component';

@Directive({
  selector: '[stbuiPopover],[popoverTriggerFor]',
  host: {
    '(click)': 'togglePopover()'
  },
  providers: [PopoverService],
  exportAs: 'popoverTrigger'
})
export class PopoverDirective implements AfterViewInit, OnDestroy {
  private portal: TemplatePortal<any>;
  private _popoverOpen = false;

  private _attach: PopoverComponent;
  @Input('popoverTriggerFor')
  set attach(value: PopoverComponent) {
    this._attach = value;
    this._popoverService.anchor(
      this.attach,
      this._viewContainerRef,
      this._elementRef
    );
  }
  get attach() {
    return this._attach;
  }

  @Input() popoverTitle: string;
  @Input() popoverMessage: string;
  @Input() confirmText: string;
  @Input() cancelText: string;
  @Input() placement: string;

  constructor(
    private _elementRef: ElementRef,
    private _viewContainerRef: ViewContainerRef,
    public _popoverService: PopoverService
  ) {}

  ngAfterViewInit() {
    this._checkPopover();
  }

  ngOnDestroy() {
    this.destoryPopover();
  }

  openPopover(): void {
    this._popoverService.open();
  }

  closePopover(): void {
    this._popoverService.close();
  }

  destoryPopover(): void {
    this._popoverService.dismiss();
  }

  togglePopover(): void {
    this._popoverOpen ? this.closePopover() : this.openPopover();
  }

  private _checkPopover() {
    if (!this.attach) {
      throw new Error(`
      Example:
        <stbui-popover #popover="stbPopover"></stbui-popover>
        <button [popoverTriggerFor]="popover"></button>
      `);
    }
  }
}
