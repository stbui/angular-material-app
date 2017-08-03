import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StaticComponent } from './static/static.component';
import { DatatableComponent } from './datatable/datatable.component';

const routes: Routes = [
  { path: '', component: StaticComponent },
  { path: 'static', component: StaticComponent },
  { path: 'datatable', component: DatatableComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class TablesRoutingModule {
}

