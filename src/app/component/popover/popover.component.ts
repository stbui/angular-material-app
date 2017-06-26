import {
  Component, Input, Output, EventEmitter, HostListener, ElementRef
} from '@angular/core';

@Component({
  selector: 'stbui-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
  exportAs: 'stbuiPopover'
})
export class PopoverComponent {

  @Input() overlay:boolean = false;
  @Input() overlayOpacity:number = 0.01;
  @Input() overlayColor:string = '#000';
  @Input() targetOrigin = {vertical: 'top', horizontal: 'left'};
  @Input() anchorOrigin = {vertical: 'bottom', horizontal: 'left'};
  @Input() autoPosition = true;
  @Input() open = false;
  // @Input() trigger;

  @Output() close = new EventEmitter();
  @Output() show = new EventEmitter();
  @Output() hide = new EventEmitter();


  @HostListener('document:click', ['$event', '$event.target']) onClick(event:MouseEvent, targetElement:HTMLElement) {
    if (!targetElement) {
      return;
    }

    const clickedInset = this.trigger.contains(targetElement);
    const clickedInside = this._elementRef.nativeElement.contains(targetElement);
    if (!clickedInside && !clickedInset) {
      this.closePopover();
    }
  }

  private _popoverOpen:boolean = false;

  public trigger;

  getAnchorPosition(el) {
    const rect = el.getBoundingClientRect();
    const a = {
      top: rect.top,
      left: el.offsetLeft,
      width: el.width,
      height: el.height,
      right: rect.right,
      bottom: rect.bottom,
      middle: 0,
      center: 0
    };

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
    let box = el.getBoundingClientRect();
    return {
      left: box.left,
      top: box.top,
      width: el.offsetWidth,
      height: el.offsetHeight
    }
  }

  setStyle() {
    const {targetOrigin, anchorOrigin} = this;
    const anchor = this.getAnchorPosition(this.trigger);
    let target = this.getTargetPosition(this.trigger);
    let targetPosition = {
      top: anchor[anchorOrigin.vertical] - target[targetOrigin.vertical],
      left: anchor[anchorOrigin.horizontal] - target[targetOrigin.horizontal]
    };
    return {
      top: `${Math.max(0, targetPosition.top)}px`,
      left: `${Math.max(0, targetPosition.left)}px`
    }
  }

  getPositions() {

  }

  openPopover() {
    this._popoverOpen = true;
  }

  closePopover() {
    this._popoverOpen = false;
  }

  toggle() {
    this._popoverOpen = !this._popoverOpen;
  }


  constructor(private _elementRef:ElementRef) {
  }

}
