import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from '../admin/admin.component';
import { AmapComponent } from './amap/amap.component';
import { MarkdownComponent } from './markdown/markdown.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PopoverComponent } from './popover/popover.component';

const routers: Routes = [
  {
    path:'',
    component: AdminComponent,
    children: [
      {
        path: 'components/amp',
        component: AmapComponent
      },
      {
        path: 'components/markdown',
        component: MarkdownComponent
      },
      {
        path: 'components/pagination',
        component: PaginationComponent
      },
      {
        path: 'components/popover',
        component: PopoverComponent
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routers, {useHash: true}) ],
  exports: [ RouterModule ],
  providers: []
})

export class RoutingModule {
}
