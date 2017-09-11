import { NgModule } from '@angular/core';
import { LoadingDirective } from './loading.directive';
import { LoadingComponent } from './loading.component';

@NgModule({
  exports: [LoadingComponent, LoadingDirective],
  declarations: [LoadingComponent, LoadingDirective],
})
export class LoadingModule {
}
