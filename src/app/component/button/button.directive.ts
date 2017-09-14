import { Directive } from '@angular/core';

@Directive({
  selector: 'button[stbui-button-large],button[stb-button-large],a[stbui-button-large],a[stb-button-large]',
  host: {'class': 'stbui-button-lg'}
})

export class ButtonDirective {
  constructor() {
  }
}
