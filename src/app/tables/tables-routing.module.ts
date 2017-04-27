import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from '../admin/admin.component';
import { StaticComponent } from './static/static.component';
import { DatatableComponent } from './datatable/datatable.component';


const routers: Routes = [
  {
    path: 'tables',
    component: AdminComponent,
    children: [
      {
        path: 'static',
        component: StaticComponent
      },
      {
        path: 'datatable',
        component: DatatableComponent
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

