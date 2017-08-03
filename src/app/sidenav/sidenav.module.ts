import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

import { SidenavComponent } from './sidenav.component';
import { ItemComponent } from './item/item.component';
import { SidenavService } from './sidenav.service';


import { PerfectScrollbarModule, PerfectScrollbarConfigInterface } from 'angular2-perfect-scrollbar';
const perfectScrollbarConfig: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  imports: [
    SharedModule,
    RouterModule,
    PerfectScrollbarModule.forRoot(perfectScrollbarConfig),
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
