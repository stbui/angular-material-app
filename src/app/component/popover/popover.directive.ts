import { Directive, Input, ElementRef, HostListener, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[stbuiPopover],[popoverTriggerFor]',
  host: {
    '(click)':'togglePopover()'
  },
  exportAs: 'popoverDirective'
})
export class PopoverDirective implements AfterViewInit {

  @Input('popoverTriggerFor') popover;

  constructor() { }

  ngAfterViewInit() {
    this._checkPopover();
  }

  private _checkPopover() {
    if(!this.popover) {
      throw new Error(`
      Example:
        <stbui-popover #popover="stbPopover"></stbui-popover>
        <button [popoverTriggerFor]="popover"></button>
      `);
    }
  }

  togglePopover() {
    console.log(this.popover);
    this.popover.openPopover();
  }

}
