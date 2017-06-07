import { Component, Input, Output, EventEmitter, ElementRef, TemplateRef, ViewChild, ViewContainerRef, AfterViewInit, OnInit } from '@angular/core';
import { Overlay, OverlayState, OverlayRef } from '@angular/material';

@Component({
  selector: 'stbui-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
  exportAs: 'stbuiPopover'
})
export class PopoverComponent implements OnInit {

  @Input() overlay: boolean = false;
  @Input() overlayOpacity: number = 0.01;
  @Input() overlayColor: string = '#000';
  @Input() targetOrigin = { vertical: 'top', horizontal: 'left' };
  @Input() anchorOrigin = { vertical: 'bottom', horizontal: 'left' };
  @Input() autoPosition = true;
  @Input() open = false;
  // @Input() trigger;

  @Output() close = new EventEmitter();
  @Output() show = new EventEmitter();
  @Output() hide = new EventEmitter();

  @ViewChild(TemplateRef) templateRef: TemplateRef<any>;
  @ViewChild('popover') popover: ElementRef;

  private _overlayRef: OverlayRef;
  private _popoverOpen: boolean = false;

  public trigger;

  getAnchorPosition(el) {
    const rect = el.getBoundingClientRect();
    const a = {
      top: rect.top,
      left: rect.left,
      width: el.width,
      height: el.height,
      right: rect.right,
      bottom: rect.bottom,
      middle: 0,
      center: 0
    }

    a.right = rect.right || a.left + a.width;
    a.bottom = rect.bottom || a.top + a.height;
    a.middle = a.left + ((a.right - a.left) / 2);
    a.center = a.top + ((a.bottom - a.top) / 2);

    return a;
  }

  getTargetPosition(targetEl) {
    return {
      top: 0,
      center: targetEl.offsetHeight / 2,
      bottom: targetEl.offsetHeight,
      left: 0,
      middle: targetEl.offsetWidth / 2,
      right: targetEl.offsetWidth
    }
  }

  getElInfo(el) {
    let box = el.getBoundingClientRect()
    return {
      left: box.left,
      top: box.top,
      width: el.offsetWidth,
      height: el.offsetHeight
    }
  }

  setStyle() {
    const { targetOrigin, anchorOrigin } = this
    const anchor = this.getAnchorPosition(this.trigger);
    let targetPosition = {
      top: anchor[anchorOrigin.vertical] - 0,
      left: anchor[anchorOrigin.horizontal] - 0
    }
    console.log('setStyle', targetOrigin);
    return {
      top: `${Math.max(0, targetPosition.top)}px`,
      left: '200px'
    }
  }

  getPositions() {

  }

  openPopover() {
    if (!this._popoverOpen) {
      this._createOverlay();

      let commentElement = this.templateRef.elementRef.nativeElement;
      let embeddedView = this.templateRef.createEmbeddedView(null);
      embeddedView.rootNodes.forEach((node) => {
        commentElement.parentNode
          .insertBefore(node, commentElement.nextSibling);
      });

      this._popoverOpen = true;
    }
  }

  closePopover() {
    this._popoverOpen = false;
  }

  private _createOverlay() {
    if (!this._overlayRef) {
      const config = this._getOverlayConfig();
      this._overlayRef = this._overlay.create(config);
    }
  }

  private _getOverlayConfig() {
    const overlayState = new OverlayState();
    overlayState.hasBackdrop = true;
    overlayState.backdropClass = 'cdk-overlay-transparent-backdrop';
    return overlayState;
  }

  constructor(private _overlay: Overlay) { }

  ngOnInit() {
  }

  ngAfterViewInit() {

  }

}
