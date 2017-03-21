import { Routes, RouterModule } from '@angular/router';

import { StaticComponent } from './static/static.component';
import { DatatableComponent } from './datatable/datatable.component';


export const routes: Routes = [
  {
    path: 'tables/static',
    component: StaticComponent
  },
  {
    path: 'tables/datatable',
    component: DatatableComponent
  },
];

export const RoutingModule = RouterModule.forChild(routes);
