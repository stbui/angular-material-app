import { NgModule } from '@angular/core';
import { LoadingDirective } from './loading.directive';

@NgModule({
  exports: [LoadingDirective],
  declarations: [LoadingDirective],
})
export class LoadingModule {
}
