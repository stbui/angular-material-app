import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablesComponent } from './tables.component';
import { StaticComponent } from './static/static.component';
import { DatatableComponent } from './datatable/datatable.component';
import { DynamicComponent } from './dynamic/dynamic.component';

const routes: Routes = [
  { path: '', component: TablesComponent },
  { path: 'static', component: StaticComponent },
  { path: 'datatable', component: DatatableComponent },
  { path: 'dynamic', component: DynamicComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablesRoutingModule {}
