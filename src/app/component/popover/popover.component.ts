import { Component, Input, Output, EventEmitter, TemplateRef, ViewChild, ViewContainerRef, AfterViewInit, OnInit } from '@angular/core';
import { Overlay, OverlayState, OverlayRef } from '@angular/material';

@Component({
  selector: 'stbui-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
  exportAs: 'stbuiPopover'
})
export class PopoverComponent implements OnInit {

  @Input() overlay:boolean = false;
  @Input() overlayOpacity:number = 0.01;
  @Input() overlayColor:string = '#000';
  @Input() targetOrigin = {vertical: 'top',horizontal: 'left'};
  @Input() anchorOrigin = {vertical: 'bottom',horizontal: 'left'};
  @Input() autoPosition = true;
  @Input() open = false;
  @Input() trigger;

  @Output() close = new EventEmitter();
  @Output() show = new EventEmitter();
  @Output() hide = new EventEmitter();

  @ViewChild(TemplateRef) templateRef:TemplateRef<any>;

  private _overlayRef: OverlayRef;

  getAnchorPosition() {

  }

  getTargetPosition() {

  }

  setStyle() {
    return {
      top:'180px',
      left:'110px'
    }
  }

  getPositions() {

  }

  openPopover() {
    // 页面中的<!--template bindings={}-->元素
    let commentElement = this.templateRef.elementRef.nativeElement;
    // 创建内嵌视图
    let embeddedView = this.templateRef.createEmbeddedView(null);
    // 动态添加子节点
    embeddedView.rootNodes.forEach((node) => {
        commentElement.parentNode
          .insertBefore(node, commentElement.nextSibling);
    });
  }

  closePopover() {

  }

  private _createOverlay() {
    if(!this._overlayRef) {
      const config =this._getOverlayConfig();
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
