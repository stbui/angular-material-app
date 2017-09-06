import { Directive } from '@angular/core';

@Directive({
  selector: '[stbuiLoading]',
  exportAs: 'stbuiLoading',
})

export class LoadingDirective {
  constructor() {
  }
}
