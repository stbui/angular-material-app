/**
 * @license
 * Copyright Stbui All Rights Reserved.
 * https://github.com/stbui
 */

import {
  Component,
  ElementRef,
  ViewChild,
  TemplateRef,
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import { FocusTrap, FocusTrapFactory } from '@angular/cdk/a11y';
import { PopoverService } from './popover.service';

@Component({
  moduleId: module.id,
  selector: 'stbui-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
  exportAs: 'stbuiPopover',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [PopoverService]
})
export class PopoverComponent implements AfterContentInit {
  @ViewChild(TemplateRef) templateRef: TemplateRef<any>;
  @ViewChild('focusTrapElement') private _focusTrapElement: ElementRef;

  constructor(
    private _popoverService: PopoverService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngAfterContentInit() {}

  open() {
    this._popoverService.afterOpened();
  }

  close() {
    console.log('close');
  }

  toggle() {
    console.log('toggle');
  }
}
