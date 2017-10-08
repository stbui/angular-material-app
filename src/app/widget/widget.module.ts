import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {StateComponent} from './state/state.component';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    StateComponent
  ],
  exports: [
    StateComponent
  ]
})
export class WidgetModule {
}
