import { NgModule } from '@angular/core';
import { ButtonDirective } from './button.directive';
import { ButtonComponent } from './button.component';

@NgModule({
  exports: [ButtonDirective],
  declarations: [ButtonDirective, ButtonComponent],
})
export class ButtonModule {
}
