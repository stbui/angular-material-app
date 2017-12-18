import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PageLayoutsRoutingModule } from './pages.routing';
import { FullwidthComponent } from './carded/fullwidth/fullwidth.component';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  imports: [
    SharedModule,
    PageLayoutsRoutingModule,
    PerfectScrollbarModule
  ],
  declarations: [FullwidthComponent],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})
export class PageLayoutsModule { }
