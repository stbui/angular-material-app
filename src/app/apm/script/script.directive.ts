import {
  Directive,
  Output,
  HostListener,
  EventEmitter,
  ElementRef
} from '@angular/core';

@Directive({
  selector: '[clickOutside]'
})
export class ScriptDirective {
  constructor(private _elementRef: ElementRef) {}

  @Output() clickOutside = new EventEmitter<MouseEvent>();

  @HostListener('document:click', ['$event', '$event.target']) onClick(
    event: MouseEvent,
    targetElement: HTMLElement
  ): void {
    if (!targetElement) {
      return;
    }

    const clickedInside = this._elementRef.nativeElement.contains(
      targetElement
    );
    if (!clickedInside) {
      this.clickOutside.emit(event);
    }
  }
}
