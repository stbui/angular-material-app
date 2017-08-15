import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

import { SidenavComponent } from './sidenav.component';
import { ItemComponent } from './item/item.component';
import { SidenavService } from './sidenav.service';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
const PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  imports: [
    SharedModule,
    RouterModule,
    PerfectScrollbarModule.forRoot(PERFECT_SCROLLBAR_CONFIG),
  ],
  declarations: [
    SidenavComponent,
    ItemComponent
  ],
  exports: [
    SidenavComponent
  ],
  providers: [
    {provide: 'sidenavService', useClass: SidenavService}
  ]
})
export class SidenavModule {
}
