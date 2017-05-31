import { Directive } from '@angular/core';

@Directive({
  selector: '[stbuiPopover],[popoverTriggerFor]',
  exportAs: 'popoverTriggerFor'
})
export class PopoverDirective {

  constructor() { }

}
