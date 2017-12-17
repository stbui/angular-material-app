import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PageLayoutsRoutingModule } from './pages.routing';
import { FullwidthComponent } from './carded/fullwidth/fullwidth.component';

@NgModule({
  imports: [
    SharedModule,
    PageLayoutsRoutingModule
  ],
  declarations: [FullwidthComponent]
})
export class PageLayoutsModule { }
